import * as THREE from 'three';
import {
    createHullPanelTexture,
    createHullBumpTexture,
    createRocketTexture,
    createHabitatWindowTexture
} from './textures.js';

/**
 * Rebuilds the Space Station from reference images as a pure procedural Three.js model.
 * Following the img2threejs methodology.
 *
 * @returns {THREE.Group} The complete Space Station model hierarchy with pivots, sockets, and lights.
 */
export function createSpaceStationModel() {
    const stationGroup = new THREE.Group();
    stationGroup.name = 'SpaceStation_Root';

    // Shared Textures
    const hullTexture = createHullPanelTexture();
    const bumpTexture = createHullBumpTexture();
    const rocketTex = createRocketTexture();
    const windowTex = createHabitatWindowTexture();

    // Shared Materials
    const hullDarkMat = new THREE.MeshStandardMaterial({
        color: 0x222830,
        metalness: 0.75,
        roughness: 0.35,
        map: hullTexture,
        bumpMap: bumpTexture,
        bumpScale: 0.08
    });

    const hullMediumMat = new THREE.MeshStandardMaterial({
        color: 0x38414e,
        metalness: 0.7,
        roughness: 0.4,
        map: hullTexture,
        bumpMap: bumpTexture,
        bumpScale: 0.05
    });

    const hullLightMat = new THREE.MeshStandardMaterial({
        color: 0x5a6575,
        metalness: 0.8,
        roughness: 0.3,
        bumpMap: bumpTexture,
        bumpScale: 0.04
    });

    const chromeMat = new THREE.MeshStandardMaterial({
        color: 0xd8e0e8,
        metalness: 0.92,
        roughness: 0.18,
        map: rocketTex
    });

    const rocketCoreMat = new THREE.MeshStandardMaterial({
        color: 0xe5eaef,
        metalness: 0.85,
        roughness: 0.25,
        map: rocketTex
    });

    const trussMat = new THREE.MeshStandardMaterial({
        color: 0x1f242b,
        metalness: 0.8,
        roughness: 0.5
    });

    const emissiveBlueMat = new THREE.MeshStandardMaterial({
        color: 0x00d9ff,
        emissive: 0x00a2ff,
        emissiveIntensity: 2.5,
        roughness: 0.2
    });

    const emissiveOrangeMat = new THREE.MeshStandardMaterial({
        color: 0xffa500,
        emissive: 0xff6600,
        emissiveIntensity: 3.0,
        roughness: 0.2
    });

    const windowGlassMat = new THREE.MeshStandardMaterial({
        color: 0xffffff,
        map: windowTex,
        emissiveMap: windowTex,
        emissive: 0xffffff,
        emissiveIntensity: 1.2,
        transparent: true,
        opacity: 0.95
    });

    // Helper: Smoothstep S-curve transition collar generator (Hermite smoothstep fillet)
    function createSmoothCollarGeometry(r1, r2, depth, segments = 64, rings = 24) {
        const points = [];
        for (let i = 0; i <= rings; i++) {
            const t = i / rings;
            // Smoothstep curve f(t) = 3t^2 - 2t^3
            const factor = 3 * (t * t) - 2 * (t * t * t);
            const radius = r1 - (r1 - r2) * factor;
            const z = (t - 0.5) * depth;
            points.push(new THREE.Vector2(radius, z));
        }
        return new THREE.LatheGeometry(points, segments);
    }

    // =========================================================================
    // 1. CENTRAL RADIAL HUB & ARMS
    // =========================================================================
    const hubGroup = new THREE.Group();
    hubGroup.name = 'Hub_Group';

    // Central Sphere Junction
    const sphereGeo = new THREE.SphereGeometry(12, 64, 64);
    const sphereMesh = new THREE.Mesh(sphereGeo, hullDarkMat);
    hubGroup.add(sphereMesh);

    // Equator & Meridian Ring Ribs around Sphere
    const ringGeo1 = new THREE.TorusGeometry(12.2, 0.6, 16, 64);
    const equatorRing = new THREE.Mesh(ringGeo1, hullMediumMat);
    equatorRing.rotation.x = Math.PI / 2;
    hubGroup.add(equatorRing);

    const meridianRing = new THREE.Mesh(ringGeo1, hullMediumMat);
    meridianRing.rotation.y = Math.PI / 2;
    hubGroup.add(meridianRing);

    // Front/Back Docking Caps (+Z and -Z)
    [-1, 1].forEach((dir) => {
        const capGeo = new THREE.CylinderGeometry(6, 7.5, 3, 32);
        const capMesh = new THREE.Mesh(capGeo, hullLightMat);
        capMesh.position.z = dir * 12.2;
        capMesh.rotation.x = Math.PI / 2;

        const portInner = new THREE.Mesh(new THREE.CylinderGeometry(4, 4, 0.5, 32), emissiveBlueMat);
        portInner.position.z = dir * 13.6;
        portInner.rotation.x = Math.PI / 2;
        hubGroup.add(capMesh, portInner);
    });

    // 4 Radial Arms (Left -X, Right +X, Top +Y, Bottom -Y)
    const armConfigs = [
        { name: 'Arm_Left', axis: 'x', dir: -1, rot: [0, -Math.PI / 2, 0], length: 22 },
        { name: 'Arm_Right', axis: 'x', dir: 1, rot: [0, Math.PI / 2, 0], length: 22 },
        { name: 'Arm_Top', axis: 'y', dir: 1, rot: [-Math.PI / 2, 0, 0], length: 22 },
        { name: 'Arm_Bottom', axis: 'y', dir: -1, rot: [Math.PI / 2, 0, 0], length: 22 }
    ];

    armConfigs.forEach((cfg) => {
        const armGroup = new THREE.Group();
        armGroup.name = cfg.name;
        armGroup.rotation.set(...cfg.rot);

        // Smooth curved transition collar from Sphere (R=12.2) to Arm Cylinder (R=8.8)
        const collarGeo = createSmoothCollarGeometry(12.0, 8.8, 6.0);
        const collarMesh = new THREE.Mesh(collarGeo, hullMediumMat);
        collarMesh.position.z = 10.0;
        armGroup.add(collarMesh);

        // Main Cylindrical Arm Tunnel
        const cylinderGeo = new THREE.CylinderGeometry(8.8, 8.8, cfg.length, 32);
        const cylinderMesh = new THREE.Mesh(cylinderGeo, hullDarkMat);
        cylinderMesh.position.z = 13.0 + cfg.length / 2;
        cylinderMesh.rotation.x = Math.PI / 2;
        armGroup.add(cylinderMesh);

        // Panel Rings & Greeble Ribs along Arm
        for (let offset of [16.0, 22.0, 28.0]) {
            const ribGeo = new THREE.TorusGeometry(9.1, 0.4, 16, 32);
            const ribMesh = new THREE.Mesh(ribGeo, hullLightMat);
            ribMesh.position.z = offset;
            armGroup.add(ribMesh);

            // Small status warning lights around rib
            for (let a = 0; a < Math.PI * 2; a += Math.PI / 4) {
                const lightGeo = new THREE.BoxGeometry(0.3, 0.3, 0.6);
                const lightMesh = new THREE.Mesh(lightGeo, emissiveOrangeMat);
                lightMesh.position.set(Math.cos(a) * 9.3, Math.sin(a) * 9.3, offset);
                armGroup.add(lightMesh);
            }
        }

        // Arm end cap
        const endCapGeo = new THREE.CylinderGeometry(9.0, 9.0, 1.5, 32);
        const endCapMesh = new THREE.Mesh(endCapGeo, hullMediumMat);
        endCapMesh.position.z = 13.0 + cfg.length;
        endCapMesh.rotation.x = Math.PI / 2;
        armGroup.add(endCapMesh);

        hubGroup.add(armGroup);
    });

    stationGroup.add(hubGroup);

    // =========================================================================
    // 2. MAIN HABITAT MODULE & OBSERVATION WINDOW BAY (RIGHT SIDE)
    // =========================================================================
    const habitatGroup = new THREE.Group();
    habitatGroup.name = 'Habitat_Group';
    habitatGroup.position.set(48, 0, 0); // Positioned to connect to Right Arm (+X)

    // Intermediate Connecting Sleeve
    const sleeveGeo = new THREE.CylinderGeometry(6.5, 6.5, 12.0, 32);
    const sleeveMesh = new THREE.Mesh(sleeveGeo, hullMediumMat);
    sleeveMesh.rotation.z = Math.PI / 2;
    sleeveMesh.position.set(-14, 0, 0);
    habitatGroup.add(sleeveMesh);

    // Heavy Main Habitat Body (Chamfered Rectangular Hull)
    const hullMainGeo = new THREE.BoxGeometry(34, 22, 22);
    const hullMainMesh = new THREE.Mesh(hullMainGeo, hullDarkMat);
    habitatGroup.add(hullMainMesh);

    // Outer Bevel Armor Plates (Top, Bottom, Corners)
    const armorTopGeo = new THREE.BoxGeometry(32, 1.5, 20);
    const armorTop = new THREE.Mesh(armorTopGeo, hullMediumMat);
    armorTop.position.y = 11.2;
    habitatGroup.add(armorTop);

    const armorBottom = armorTop.clone();
    armorBottom.position.y = -11.2;
    habitatGroup.add(armorBottom);

    // Large Illuminated Observation Window Bay (Front Face -Z)
    const windowFrameGeo = new THREE.BoxGeometry(24, 12, 2);
    const windowFrameMesh = new THREE.Mesh(windowFrameGeo, hullLightMat);
    windowFrameMesh.position.set(0, 0, 11.1);

    const windowGlassGeo = new THREE.PlaneGeometry(21, 9.5);
    const windowGlassMesh = new THREE.Mesh(windowGlassGeo, windowGlassMat);
    windowGlassMesh.position.set(0, 0, 12.2);

    habitatGroup.add(windowFrameMesh, windowGlassMesh);

    // Interior Light Point inside Habitat Window
    const bayLight = new THREE.PointLight(0x00c8ff, 3.5, 30);
    bayLight.position.set(48, 0, 8);
    stationGroup.add(bayLight);

    // Exterior Radiator Panels on Rear (+Z)
    for (let rx of [-10, 0, 10]) {
        const radGeo = new THREE.BoxGeometry(6, 18, 1);
        const radMesh = new THREE.Mesh(radGeo, hullMediumMat);
        radMesh.position.set(rx, 0, -11.5);
        habitatGroup.add(radMesh);
    }

    stationGroup.add(habitatGroup);

    // =========================================================================
    // 3. LAUNCH RING & DOCKING PLATFORM (-Y BELOW HABITAT)
    // =========================================================================
    const ringGroup = new THREE.Group();
    ringGroup.name = 'LaunchRing_Group';
    ringGroup.position.set(52, -26, 0); // Mounted underneath habitat

    // Vertical Tunnel Connection from Habitat to Ring
    const ringTunnelGeo = new THREE.CylinderGeometry(4.0, 4.0, 15.0, 24);
    const ringTunnelMesh = new THREE.Mesh(ringTunnelGeo, hullMediumMat);
    ringTunnelMesh.position.set(0, 7.5, 0);
    ringGroup.add(ringTunnelMesh);

    // Main Concentric Launch Ring Deck
    const outerRingGeo = new THREE.TorusGeometry(15.0, 1.8, 16, 64);
    const outerRingMesh = new THREE.Mesh(outerRingGeo, hullDarkMat);
    outerRingMesh.rotation.x = Math.PI / 2;
    ringGroup.add(outerRingMesh);

    const innerDeckGeo = new THREE.CylinderGeometry(13.2, 13.2, 2.0, 48);
    const innerDeckMesh = new THREE.Mesh(innerDeckGeo, hullMediumMat);
    ringGroup.add(innerDeckMesh);

    // Perimeter Structural Railings & Lights
    for (let angle = 0; angle < Math.PI * 2; angle += Math.PI / 6) {
        const postGeo = new THREE.BoxGeometry(0.4, 2.5, 0.4);
        const postMesh = new THREE.Mesh(postGeo, hullLightMat);
        postMesh.position.set(Math.cos(angle) * 15.0, 2.0, Math.sin(angle) * 15.0);

        const beaconGeo = new THREE.SphereGeometry(0.4, 8, 8);
        const beaconMesh = new THREE.Mesh(beaconGeo, emissiveOrangeMat);
        beaconMesh.position.set(Math.cos(angle) * 15.0, 3.5, Math.sin(angle) * 15.0);

        ringGroup.add(postMesh, beaconMesh);
    }

    // Lower Rocket Thruster Nozzles Array Under Ring
    for (let a = 0; a < Math.PI * 2; a += Math.PI / 4) {
        const nozzleGeo = new THREE.ConeGeometry(1.2, 3.5, 16);
        const nozzleMesh = new THREE.Mesh(nozzleGeo, trussMat);
        nozzleMesh.position.set(Math.cos(a) * 9.0, -3.0, Math.sin(a) * 9.0);
        nozzleMesh.rotation.x = Math.PI; // Face downward
        ringGroup.add(nozzleMesh);
    }

    stationGroup.add(ringGroup);

    // =========================================================================
    // 4. MULTI-STAGE SPACE ROCKET (MOUNTED VERTICALLY ON LAUNCH RING)
    // =========================================================================
    const rocketGroup = new THREE.Group();
    rocketGroup.name = 'Rocket_Group';
    rocketGroup.position.set(52, -24, 0); // Base sits on the launch deck

    // Stage 1 & 2 Fuselage Body
    const coreBodyGeo = new THREE.CylinderGeometry(3.6, 4.0, 36.0, 32);
    const coreBodyMesh = new THREE.Mesh(coreBodyGeo, rocketCoreMat);
    coreBodyMesh.position.y = 19.0;
    rocketGroup.add(coreBodyMesh);

    // Streamlined Nose Cone Top
    const noseConeGeo = new THREE.ConeGeometry(3.6, 12.0, 32);
    const noseConeMesh = new THREE.Mesh(noseConeGeo, chromeMat);
    noseConeMesh.position.y = 43.0;
    rocketGroup.add(noseConeMesh);

    // Top Antenna Spire Tip
    const spireGeo = new THREE.CylinderGeometry(0.2, 0.6, 6.0, 16);
    const spireMesh = new THREE.Mesh(spireGeo, hullLightMat);
    spireMesh.position.y = 52.0;
    rocketGroup.add(spireMesh);

    // 4 Strap-on Booster Rockets Surrounding Base Core
    for (let b = 0; b < 4; b++) {
        const bAngle = b * (Math.PI / 2) + Math.PI / 4;
        const bx = Math.cos(bAngle) * 5.2;
        const bz = Math.sin(bAngle) * 5.2;

        const boosterGroup = new THREE.Group();
        boosterGroup.position.set(bx, 10.0, bz);

        // Booster Fuselage
        const bGeo = new THREE.CylinderGeometry(1.6, 1.8, 18.0, 24);
        const bMesh = new THREE.Mesh(bGeo, rocketCoreMat);

        // Booster Nose Cone
        const bNoseGeo = new THREE.ConeGeometry(1.6, 5.0, 24);
        const bNoseMesh = new THREE.Mesh(bNoseGeo, chromeMat);
        bNoseMesh.position.y = 11.5;

        // Booster Engine Exhaust Bell
        const bellGeo = new THREE.ConeGeometry(1.2, 2.5, 16);
        const bellMesh = new THREE.Mesh(bellGeo, trussMat);
        bellMesh.position.y = -10.0;
        bellMesh.rotation.x = Math.PI;

        boosterGroup.add(bMesh, bNoseMesh, bellMesh);
        rocketGroup.add(boosterGroup);

        // Structural Mounting Strut to core
        const strutGeo = new THREE.BoxGeometry(1.6, 0.4, 0.4);
        const strutMesh = new THREE.Mesh(strutGeo, hullLightMat);
        strutMesh.position.set(bx * 0.5, 10.0, bz * 0.5);
        strutMesh.rotation.y = bAngle;
        rocketGroup.add(strutMesh);
    }

    stationGroup.add(rocketGroup);

    // =========================================================================
    // 5. LATTICE GANTRY TOWER & UMBILICAL BRIDGES (RIGHT OF ROCKET)
    // =========================================================================
    const gantryGroup = new THREE.Group();
    gantryGroup.name = 'Gantry_Group';
    gantryGroup.position.set(68, -26, 0); // Positioned next to rocket

    const towerHeight = 72.0;
    const towerWidth = 6.0;

    // 4 Corner Vertical Columns
    [-1, 1].forEach((cx) => {
        [-1, 1].forEach((cz) => {
            const colGeo = new THREE.CylinderGeometry(0.5, 0.5, towerHeight, 16);
            const colMesh = new THREE.Mesh(colGeo, trussMat);
            colMesh.position.set(cx * (towerWidth / 2), towerHeight / 2, cz * (towerWidth / 2));
            gantryGroup.add(colMesh);
        });
    });

    // Horizontal & Diagonal Lattice Cross-Braces along Height
    const numLevels = 12;
    const levelStep = towerHeight / numLevels;

    for (let lvl = 0; lvl <= numLevels; lvl++) {
        const ly = lvl * levelStep;

        // Outer Ring Horizontal Beams
        const ringBeamGeo = new THREE.BoxGeometry(towerWidth, 0.4, towerWidth);
        const ringBeamMesh = new THREE.Mesh(ringBeamGeo, hullMediumMat);
        ringBeamMesh.position.set(0, ly, 0);
        gantryGroup.add(ringBeamMesh);

        // Diagonal Cross Struts
        if (lvl < numLevels) {
            const diagLen = Math.sqrt(towerWidth * towerWidth + levelStep * levelStep);
            const diagGeo = new THREE.CylinderGeometry(0.2, 0.2, diagLen, 8);

            const d1 = new THREE.Mesh(diagGeo, trussMat);
            d1.position.set(0, ly + levelStep / 2, towerWidth / 2);
            d1.rotation.z = Math.atan2(towerWidth, levelStep);
            gantryGroup.add(d1);

            const d2 = new THREE.Mesh(diagGeo, trussMat);
            d2.position.set(0, ly + levelStep / 2, -towerWidth / 2);
            d2.rotation.z = -Math.atan2(towerWidth, levelStep);
            gantryGroup.add(d2);
        }

        // Orange Emissive Warning Light Beacons on Tower Corners
        if (lvl % 3 === 0) {
            const lightGeo = new THREE.SphereGeometry(0.5, 8, 8);
            const lightMesh = new THREE.Mesh(lightGeo, emissiveOrangeMat);
            lightMesh.position.set(-towerWidth / 2 - 0.2, ly, towerWidth / 2 + 0.2);
            gantryGroup.add(lightMesh);
        }
    }

    // Horizontal Umbilical Connecting Arms (Tower -> Rocket & Habitat)
    const armHeights = [22.0, 42.0, 58.0];
    armHeights.forEach((ay, idx) => {
        const bridgeGeo = new THREE.BoxGeometry(16.0, 1.2, 2.5);
        const bridgeMesh = new THREE.Mesh(bridgeGeo, hullLightMat);
        bridgeMesh.position.set(-8.0, ay, 0);

        // Pipe conduits along bridge
        const pipeGeo = new THREE.CylinderGeometry(0.3, 0.3, 16.0, 12);
        const pipeMesh = new THREE.Mesh(pipeGeo, chromeMat);
        pipeMesh.rotation.z = Math.PI / 2;
        pipeMesh.position.set(-8.0, ay + 1.0, 0.8);

        gantryGroup.add(bridgeMesh, pipeMesh);
    });

    stationGroup.add(gantryGroup);

    // =========================================================================
    // 6. SOCKETS, COLLIDERS & RUNTIME METADATA
    // =========================================================================
    stationGroup.userData = {
        sockets: {
            rocketDock: rocketGroup.position,
            habitatWindow: new THREE.Vector3(48, 0, 12),
            topGantryBeacon: new THREE.Vector3(68, 46, 0)
        },
        colliders: [
            { name: 'Hub_Sphere', radius: 12, center: new THREE.Vector3(0, 0, 0) },
            { name: 'Habitat_Box', size: new THREE.Vector3(34, 22, 22), center: new THREE.Vector3(48, 0, 0) },
            { name: 'Rocket_Fuselage', radius: 4, height: 48, center: new THREE.Vector3(52, 0, 0) }
        ]
    };

    return stationGroup;
}

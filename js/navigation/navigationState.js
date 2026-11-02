/**
 * Navigation State Manager
 * Tracks scene history as a stack for back-navigation (rewind).
 * Each entry records which scene the user is in and any metadata needed to reverse back to it.
 */

// Named scene phases in order of forward progression
export const NAV_PHASES = {
  ROOM_INTERIOR: 'ROOM_INTERIOR',          // Scene 1: Inside the room
  EXTERIOR_SELECTION: 'EXTERIOR_SELECTION', // Scene 2: Hologram selection screen
  EARTH_LANDING: 'EARTH_LANDING',          // Earth landing sequence & monolith view
  KOPPULA_SYSTEM: 'KOPPULA_SYSTEM',        // Solar system overview (interactive)
  PLANET_FOCUS: 'PLANET_FOCUS',            // Planet exploded/focused view
};

class NavigationState {
  constructor() {
    /** @type {string[]} */
    this.history = [NAV_PHASES.ROOM_INTERIOR];

    /** @type {((phase: string, historyLength: number) => void)[]} */
    this._listeners = [];
  }

  /** Current phase name */
  get current() {
    return this.history[this.history.length - 1];
  }

  /** True when we're at the very first screen and can't go back further */
  get isAtOrigin() {
    return this.history.length <= 1;
  }

  /** Push a new phase onto the stack */
  push(phase) {
    // Don't double-push the same phase
    if (this.current === phase) return;
    this.history.push(phase);
    this._notify();
  }

  /** Pop the most recent phase and return the new current */
  pop() {
    if (this.isAtOrigin) return this.current;
    this.history.pop();
    this._notify();
    return this.current;
  }

  /** Peek at what we'd rewind TO (the phase one step back) */
  get previousPhase() {
    if (this.history.length < 2) return null;
    return this.history[this.history.length - 2];
  }

  /** Subscribe to changes */
  onChange(fn) {
    this._listeners.push(fn);
  }

  /** @private */
  _notify() {
    const phase = this.current;
    const len = this.history.length;
    this._listeners.forEach((fn) => fn(phase, len));
  }
}

export const navigationState = new NavigationState();

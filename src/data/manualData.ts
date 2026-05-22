export interface ManualStep {
  step: number
  action: string
  time: string
}

export interface TroubleshootingEntry {
  condition: string
  likely_issue: string
  next_step: string
}

export interface VehicleData {
  model: string
  market: string
  systems: string[]
  key_types: {
    master: string
    valet: string
  }
}

export interface EFIRelayBypass {
  purpose: string
  common_symptoms: string[]
  procedure: {
    precautions: string[]
    steps: string[]
    notes: string
  }
}

export interface ImmobilizerRingAntenna {
  purpose: string
  testing_procedure: {
    tools_needed: string[]
    resistance_test: string[]
    replacement_steps: string[]
    notes: string
  }
}

export interface RemoteFobProgramming {
  purpose: string
  timed_sequence: {
    steps: ManualStep[]
  }
}

export interface KeyRegistration {
  add_new_key_timed_sequence: {
    preconditions: string
    steps: ManualStep[]
    success_indicator: string
  }
  delete_all_but_one_master: {
    steps: ManualStep[]
  }
}

export const vehicleData: VehicleData = {
  model: "1998 Toyota Land Cruiser 100-series (UZJ100)",
  market: "US / JDM (note potential ECU variations for imports)",
  systems: [
    "Remote Keyless Entry (separate)",
    "Immobilizer with 4C Texas Instruments transponder",
    "EFI Main Relay & Power Distribution",
  ],
  key_types: {
    master: "Security light off immediately (engine off position)",
    valet: "Security light on 1-3 seconds then off",
  },
}

export const efiRelayBypass: EFIRelayBypass = {
  purpose:
    "Addresses common 'crank but no start' where immobilizer loses power due to degraded EFI fuse/relay circuit in the engine bay fuse box.",
  common_symptoms: [
    "Cranks normally but no start",
    "Security light behaves correctly",
    "Intermittent or permanent fuel/ignition cutoff",
  ],
  procedure: {
    precautions: [
      "Disconnect battery negative terminal before working on fuse box",
      "Use proper gauge wire (14-16 AWG recommended)",
      "This is a semi-permanent fix — consider replacing fuse box long-term",
    ],
    steps: [
      "1. Locate engine bay fuse box (driver side).",
      "2. Remove 20A EFI fuse.",
      "3. Install bypass kit or custom harness: Connect constant 12V (from battery positive via inline fuse) to the EFI circuit output.",
      "4. Many use a relay-based bypass plugged into the EFI fuse slots.",
      "5. Reconnect battery and test start.",
    ],
    notes:
      "Popular plug-and-play kits available via IH8MUD community (Medtro kit). Highly effective for 100-series immobilizer-related no-starts.",
  },
}

export const immobilizerRingAntenna: ImmobilizerRingAntenna = {
  purpose:
    "The ring antenna (transponder coil) around the ignition cylinder reads the 4C chip.",
  testing_procedure: {
    tools_needed: ["Digital Multimeter", "Screwdrivers for steering column removal"],
    resistance_test: [
      "Remove lower steering column shroud.",
      "Disconnect antenna connector (usually 2-pin near ignition).",
      "Measure resistance across the two pins: Expected range ≈ 2.5 – 4.5 Ω (typical for Toyota 4C systems; consult exact FSM for tolerance).",
      "Infinite resistance = open circuit (failed antenna).",
      "0 Ω = shorted.",
    ],
    replacement_steps: [
      "1. Disconnect battery.",
      "2. Remove steering column shrouds.",
      "3. Unscrew and remove old ring antenna.",
      "4. Install new antenna (OEM part 89783-33100 or equivalent).",
      "5. Reconnect and test key recognition.",
    ],
    notes:
      "Weak or failed antenna is a frequent cause of blinking security light even with correct key.",
  },
}

export const remoteFobProgramming: RemoteFobProgramming = {
  purpose: "Programs lock/unlock functions only.",
  timed_sequence: {
    steps: [
      { step: 1, action: "Open driver door, insert key (do not turn).", time: "N/A" },
      { step: 2, action: "Cycle power lock switch 5 times (Lock → Unlock).", time: "Within 40 seconds total" },
      { step: 3, action: "Close then reopen driver door.", time: "N/A" },
      { step: 4, action: "Cycle lock switch 5 times again.", time: "N/A" },
      { step: 5, action: "Turn key ON → OFF, remove key.", time: "N/A" },
      { step: 6, action: "Confirm doors cycle = programming mode.", time: "Within 40 seconds" },
      { step: 7, action: "Press and hold remote buttons as required.", time: "Within 40 seconds of mode entry" },
    ],
  },
}

export const keyRegistration: KeyRegistration = {
  add_new_key_timed_sequence: {
    preconditions: "At least one working master key. Driver seat, doors closed except driver door open initially.",
    steps: [
      { step: 1, action: "Depress and release Brake + Accelerator pedals simultaneously once.", time: "N/A" },
      { step: 2, action: "Insert existing MASTER key (DO NOT TURN).", time: "N/A" },
      { step: 3, action: "Depress/release Accelerator pedal 5 times.", time: "15 seconds" },
      { step: 4, action: "Depress/release Brake pedal 6 times, then remove master key.", time: "20 seconds" },
      { step: 5, action: "Insert new key with verified 4C chip.", time: "10 seconds" },
      { step: 6, action: "Depress/release Accelerator pedal once.", time: "10 seconds" },
      { step: 7, action: "Wait for security light to turn OFF (key learned).", time: "Approximately 80 seconds" },
      { step: 8, action: "Remove new key. Depress/release Brake pedal once to exit.", time: "N/A" },
    ],
    success_indicator: "Security light behaves normally with new key. Engine starts.",
  },
  delete_all_but_one_master: {
    steps: [
      { step: 1, action: "Depress/release Brake + Accelerator once.", time: "N/A" },
      { step: 2, action: "Insert working MASTER key.", time: "N/A" },
      { step: 3, action: "Depress/release Accelerator 6 times.", time: "15 seconds" },
      { step: 4, action: "Depress/release Brake 7 times.", time: "20 seconds" },
      { step: 5, action: "Observe rapid flashing of security light (deletion confirmed).", time: "N/A" },
      { step: 6, action: "Remove key within 10 seconds.", time: "10 seconds" },
    ],
  },
}

export const troubleshootingData: TroubleshootingEntry[] = [
  {
    condition: "Crank but no start + security light normal",
    likely_issue: "EFI relay / fuse box power delivery failure",
    next_step: "Perform EFI Relay Bypass or inspect fuse box traces.",
  },
  {
    condition: "Blinking security light",
    likely_issue: "Antenna, wrong chip, or unregistered key",
    next_step: "Test immobilizer ring antenna resistance.",
  },
]

export const manualNotes: string[] = [
  "All timed sequences require a stopwatch for best results.",
  "Always verify 4C chip type before programming.",
  "Maintain at least two working master keys.",
  "For all-keys-lost situations, consult a professional with Techstream or equivalent.",
  "EFI bypass and antenna work are common reliable fixes for 100-series issues.",
]

export const navItems = [
  { id: "overview", label: "Overview", icon: "info" },
  { id: "key-types", label: "Key Types", icon: "key" },
  { id: "fob", label: "Remote Fob", icon: "radio" },
  { id: "key-registration", label: "Key Registration", icon: "file-plus" },
  { id: "efi-relay", label: "EFI Relay Bypass", icon: "zap" },
  { id: "immobilizer", label: "Ring Antenna", icon: "wifi" },
  { id: "troubleshooting", label: "Troubleshooting", icon: "search" },
] as const

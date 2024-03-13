export interface SolarPotential {
    maxArrayPanelsCount: number;
    panelCapacityWatts: number;
    panelHeightMeters: number;
    panelWidthMeters: number;
    panelLifetimeYears: number;
    maxArrayAreaMeters2: number;
    maxSunshineHoursPerYear: number;
    carbonOffsetFactorKgPerMwh: number;
    wholeRoofStats: SizeAndSunshineStats;
    buildingStats: SizeAndSunshineStats;
    roofSegmentStats: RoofSegmentSizeAndSunshineStats[];
    solarPanels: SolarPanel[];
    solarPanelConfigs: SolarPanelConfig[];
    financialAnalyses: object;
  }
  
  export interface SizeAndSunshineStats {
    areaMeters2: number;
    sunshineQuantiles: number[];
    groundAreaMeters2: number;
  }
  
  export interface RoofSegmentSizeAndSunshineStats {
    pitchDegrees: number;
    azimuthDegrees: number;
    stats: SizeAndSunshineStats;
    center: LatLng;
    boundingBox: LatLngBox;
    planeHeightAtCenterMeters: number;
  }
  
  export interface SolarPanel {
    center: LatLng;
    orientation: 'LANDSCAPE' | 'PORTRAIT';
    segmentIndex: number;
    yearlyEnergyDcKwh: number;
  }
  
  export interface SolarPanelConfig {
    panelsCount: number;
    yearlyEnergyDcKwh: number;
    roofSegmentSummaries: RoofSegmentSummary[];
  }
  
  export interface RoofSegmentSummary {
    pitchDegrees: number;
    azimuthDegrees: number;
    panelsCount: number;
    yearlyEnergyDcKwh: number;
    segmentIndex: number;
  }
  
  export interface LatLng {
    latitude: number;
    longitude: number;
  }
  
  export interface LatLngBox {
    sw: LatLng;
    ne: LatLng;
  }
  
  export interface Date {
    year: number;
    month: number;
    day: number;
  }
  
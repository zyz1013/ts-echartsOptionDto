type Color = string;

/**
 * 文字样式
 */
export interface TextStyle extends FontStyle, TextBorderOrShadowStyle {
  color?: Color;
  lineHeight?: number;
  width?: string | number;
  height?: string | number;
}

/**
 *  方位样式
 */
export interface DirectionsStyle {
  left?: string | number;
  right?: string | number;
  top?: string | number;
  bottom?: string | number;
}

/**
 * 层级样式
 */
export interface ZlevelStyle {
  zlevel?: number;
  z?: number;
}

/**
 * 边框样式
 */
export interface BorderStyle {
  borderColor?: Color;
  borderWidth?: number;
  borderRadius?: number | number[];
}

/**
 * 阴影样式
 */
export interface ShadowStyle {
  shadowBlur?: number;
  shadowColor?: Color;
  shadowOffsetX?: number;
  shadowOffsetY?: number;
}

/**
 *  字体样式
 */
export interface FontStyle {
  fontStyle?: string;
  fontWeight?: string;
  fontFamily?: string;
  fontSize?: number;
}

/**
 *  文本样式
 */
export interface TextBorderOrShadowStyle {
  textBorderColor?: string;
  textBorderWidth?: number;
  textShadowColor?: string;
  textShadowBlur?: number;
  textShadowOffsetX?: number;
  textShadowOffsetY?: number;
}

/**
 *
 * @interface LabelStyle
 */
export interface LabelStyle
  extends FontStyle,
    BorderStyle,
    ShadowStyle,
    TextBorderOrShadowStyle {
  show?: boolean;
  precision?: number | string;
  formatter?: any;
  margin?: boolean;
  color?: Color;
  lineHeight?: number;
  width?: number | string;
  height?: number | string;
  padding?: string | number[];
  backgroundColor?: string;
}

/**
 *
 * @interface LineStyle
 */
export interface LineStyle extends ShadowStyle {
  color?: any;
  width?: number;
  type?: string;
  opacity?: number;
  normal?: any;
}

/**
 *
 * @interface IconStyle
 */
export interface IconStyle extends ShadowStyle {
  color?: Color;
  borderWidth?: number;
  borderType?: string;
  opacity?: number;
  textPosition?: string;
  textAlign?: string;
}
/**
 *
 * @interface CrossStyle
 */
export interface CrossStyle extends ShadowStyle {
  color?: Color;
  width?: number;
  type?: string;
  opacity?: number;
}

/**
 * @interface AreaStyle
 */
export interface AreaStyle extends ShadowStyle {
  color?: Color | any[];
  opacity?: number;
  normal?: any;
}

export interface ItemStyle extends ShadowStyle {
  color?: any;
  borderColor?: Color;
  borderWidth?: number;
  borderType?: string;
  opacity?: number;
  normal?: any;
  lineStyle?: LineStyle;
}

interface EchartsTitle
  extends DirectionsStyle,
    ZlevelStyle,
    BorderStyle,
    ShadowStyle {
  id?: string;
  text?: string;
  show?: boolean;
  link?: string;
  target?: string;
  textStyle?: TextStyle;
  subtext?: string;
  sublink?: string;
  subtarget?: string;
  subtextStyle?: TextStyle;
  textAlign?: string;
  textVerticalAlign?: string;
  triggerEvent?: boolean;
  padding?: number;
  itemGap?: number;
  backgroundColor?: Color;
}

interface EchartsTootip {
  show?: boolean;
  trigger?: string;
  axisPointer?: {
    type?: string;
    axis?: string;
    snap?: boolean;
    z?: number;
    label?: LabelStyle;
    lineStyle?: LineStyle;
    shadowStyle?: {
      color?: Color;
      opacity?: number;
    } & ShadowStyle;
    crossStyle?: CrossStyle;
  };
  showContent?: boolean;
  alwaysShowContent?: boolean;
  triggerOn?: string;
  showDelay?: number;
  hideDelay?: number;
  enterable?: boolean;
  renderMode?: string;
  confine?: boolean;
  transitionDuration?: number;
  position?: any;
  formatter?: any;
  backgroundColor?: string;
  borderColor?: Color;
  borderWidth?: number;
  padding?: number;
  textStyle?: TextStyle;
  extraCssText?: string;
}

interface LegendDataItem {
  name?: string;
  icon?: string;
  textStyle?: TextStyle;
}

interface EchartsLegend
  extends DirectionsStyle,
    ZlevelStyle,
    ShadowStyle,
    BorderStyle {
  type?: string;
  id?: string;
  show?: boolean;
  orient?: string;
  align?: string;
  padding?: number;
  itemGap?: number;
  itemWidth?: number;
  itemHeight?: number;
  symbolKeepAspect?: boolean;
  formatter?: string | ((name: string) => string);
  selectedMode?: string | boolean;
  inactiveColor?: Color;
  selected?: any;
  textStyle?: TextStyle;
  tooltip?: any;
  data?: LegendDataItem[] | string[];
  backgroundColor?: Color;
  scrollDataIndex?: number;
  pageButtonItemGap?: number;
  pageButtonGap?: number;
  pageButtonPosition?: string;
  pageFormatter?: ((current: number, total: number) => string) | string;
  pageIcons?: {
    horizontal?: any[];
    vertical?: any[];
  };
  pageIconColor?: string;
  pageIconInactiveColor?: string;
  pageIconSize?: number | number[];
  pageTextStyle?: TextStyle;
  animation?: boolean;
  animationDurationUpdate?: number;
}

interface EchartsToolbox extends DirectionsStyle, ZlevelStyle {
  id?: string;
  show?: boolean;
  orient?: string;
  itemSize?: number;
  itemGap?: number;
  showTitle?: boolean;
  feature?: any;
  iconStyle?: IconStyle;
  emphasis?: {
    iconStyle?: IconStyle;
  };
  width?: string | number;
  height?: string | number;
}

interface EchartsGrid
  extends DirectionsStyle,
    ZlevelStyle,
    BorderStyle,
    ShadowStyle {
  id?: string;
  show?: boolean;
  width?: string | number;
  height?: string | number;
  containLabel?: boolean;
  backgroundColor?: Color;
  tooltip?: {
    show?: boolean;
    trigger?: string;
    axisPointer?: {
      type?: string;
      axis?: string;
      snap?: boolean;
      z?: number;
      label?: LabelStyle;
      lineStyle?: LineStyle;
      shadowStyle?: {
        color?: Color;
        opacity?: number;
      } & ShadowStyle;
      crossStyle?: CrossStyle;
    };
    position?: any;
    formatter?: any;
    backgroundColor?: Color;
    borderColor?: Color;
    borderWidth?: number;
    padding?: number;
    textStyle?: TextStyle;
    extraCssText?: string;
  };
}

interface EchartsXOrYAxis extends ZlevelStyle {
  id?: string;
  show?: boolean;
  gridIndex?: number;
  position?: string;
  offset?: number;
  type?: string;
  name?: string;
  nameLocation?: string;
  nameTextStyle?: TextStyle;
  nameGap?: number;
  nameRotate?: number | null;
  inverse?: boolean;
  boundaryGap?: boolean | string[] | number[];
  min?: number | string | ((value: any) => number);
  max?: number | string | ((value: any) => number);
  scale?: boolean;
  splitNumber?: number;
  minInterval?: number;
  maxInterval?: number;
  interval?: number;
  logBase?: number;
  silent?: boolean;
  triggerEvent?: boolean;
  axisLine?: {
    show?: boolean;
    lineStyle?: LineStyle;
  };
  axisTick?: {
    show?: boolean;
    lineStyle?: LineStyle;
  };
  axisLabel?: {
    show?: boolean;
    color?: any;
    backgroundColor?: any;
  } & FontStyle &
    BorderStyle &
    ShadowStyle &
    TextBorderOrShadowStyle;
  splitLine?: {
    show?: true;
    interval?: any;
    lineStyle?: LineStyle;
  };
  splitArea?: {
    show?: true;
    interval?: any;
    areaStyle?: AreaStyle;
  };
  data?: string[] | number[];
  axisPointer?: {
    show?: boolean;
    type?: string;
    label?: LabelStyle;
    lineStyle?: LineStyle;
    shadowStyle?: {
      color?: Color;
      opacity?: number;
    } & ShadowStyle;
  };
}

interface SeriesItem extends ZlevelStyle {
  barWidth?: number;
  type?: string;
  id?: string;
  name?: string;
  coordinateSystem?: string;
  xAxisIndex?: number;
  yAxisIndex?: number;
  polarIndex?: number;
  symbol?: string;
  symbolSize?: any;
  symbolRotate?: number;
  symbolKeepAspect?: boolean;
  symbolOffset?: number[] | string[];
  showSymbol?: boolean;
  showAllSymbol?: boolean;
  hoverAnimation?: boolean;
  legendHoverLink?: boolean;
  stack?: string | null;
  cursor?: string;
  connectNulls?: boolean;
  clipOverflow?: boolean;
  step?: string | boolean;
  large?: boolean;
  largeThreshold?: number;
  label?: LabelStyle;
  itemStyle?: ItemStyle;
  lineStyle?: LineStyle;
  areaStyle?: AreaStyle;
  emphasis?: {
    label?: LabelStyle;
    itemStyle?: ItemStyle;
  };
  smooth?: boolean | number;
  smoothMonotone?: boolean | string;
  sampling?: string;
  dimensions?: any[];
  encode?: any;
  seriesLayoutBy?: string;
  datasetIndex?: number;
  data?: any[];
  markPoint?: any;
  markLine?: any;
  markArea?: any;
  silent?: boolean;
  animation?: boolean;
  animationThreshold?: number;
  animationDuration?: number;
  animationEasing?: string;
  animationDelay?: number | ((idx: number) => number);
  animationDurationUpdate?: number | ((idx: number) => number);
  animationEasingUpdate?: string;
  animationDelayUpdate?: number | ((idx: number) => number);
  tooltip?: {
    position?: any;
    backgroundColor?: string;
    borderColor?: Color;
    borderWidth?: number;
    padding?: number;
    textStyle?: TextStyle;
    extraCssText?: string;
  };
}
type EchartsSeries = SeriesItem[];

interface EchartsDataZoom extends DirectionsStyle {
  type?: string;
  id?: string;
  show?: boolean;
  disabled?: boolean;
  xAxisIndex?: number | number[];
  yAxisIndex?: number | number[];
  radiusAxisIndex?: number | number[];
  angleAxisIndex?: number | number[];
  filterMode?: string;
  start?: number;
  end?: number;
  startValue?: number | string | Date;
  endValue?: number | string | Date;
  minSpan?: number;
  maxSpan?: number;
  minValueSpan?: number | string | Date;
  maxValueSpan?: number | string | Date;
  orient?: string;
  zoomLock?: boolean;
  throttle?: number;
  rangeMode?: any[];
  zoomOnMouseWheel?: boolean;
  moveOnMouseMove?: boolean;
  moveOnMouseWheel?: boolean;
  preventDefaultMouseMove?: boolean;
}

export interface EchartsOptionDto {
  title?: EchartsTitle;
  tooltip?: EchartsTootip;
  legend?: EchartsLegend;
  toolbox?: EchartsToolbox;
  grid?: EchartsGrid;
  xAxis?: EchartsXOrYAxis | EchartsXOrYAxis[];
  yAxis?: EchartsXOrYAxis | EchartsXOrYAxis[];
  dataZoom?: EchartsDataZoom[];
  series?: EchartsSeries;
  color?: string;
  backgroundColor?: string;
  textStyle?: TextStyle;
  animation?: boolean;
  animationThreshold?: number;
  animationDuration?: number;
  animationEasing?: string;
  animationDelay?: number | ((idx: number) => number);
  animationDurationUpdate?: number | ((idx: number) => number);
  animationEasingUpdate?: string;
  animationDelayUpdate?: number | ((idx: number) => number);
  blendMode?: string;
  hoverLayerThreshold?: boolean;
  useUTC?: boolean;
}

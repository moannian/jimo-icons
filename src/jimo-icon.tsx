import * as React from "react";
import { Component, CSSProperties } from "react";
import { cx } from "emotion";

import "./fonts/jimo.css";

export type IconType = "lg" | "2x" | "3x" | "4x" | "5x";

export interface IconProps {
  name: EJimoIcon;
  className?: string;
  style?: CSSProperties;
  onClick?: (event) => void;
  onMouseEnter?: (event) => void;
}

export default class JimoIcon extends Component<IconProps, any> {
  render() {
    const { name, className, style, onClick } = this.props;
    let iconPrefix = "jimo";
    let classNames = iconPrefix;

    classNames += ` ${iconPrefix}-${name}`;

    classNames = className ? cx(classNames, className) : classNames;

    return (
      <i
        style={style}
        className={classNames}
        aria-hidden="true"
        onMouseEnter={this.props.onMouseEnter}
        onClick={onClick}
      />
    );
  }
}

export enum EJimoIcon {
  application = "application",
  appsOverview = "apps-overview",
  bellOutline = "bell-o",
  button = "button",
  calendar = "calendar",
  checkbox = "checkbox",
  checkCircle = "check-circle",
  checkCircleO = "check-circle-o",
  checkCircleOutline = "check-circle-outline",
  clock = "clock",
  configurationCenter = "configuration-center",
  container = "container",
  dataAnalysis = "data-analysis",
  defectAnalysis = "defect-analysis",
  device = "device",
  download = "download",
  envelope = "envelop",
  envelopeOpen = "envelop-open",
  flowControlAnalysis = "flow-control-analysis",
  fork = "fork",
  fullscreen = "fullscreen",
  gauge = "gauge",
  incomingInspection = "incoming-inspection",
  input = "input",
  intelligentReport = "intelligent-report",
  inventory = "inventory",
  inventoryManagement = "inventory-management",
  measurementDataAnalysis = "measurement-data-analysis",
  mechanicalAnalysis = "mechanical-analysis",
  numberInput = "number-input",
  packing = "packing",
  plus = "plus",
  ppap = "ppap",
  problemAnalysis = "problem-analysis",
  processEvents = "process-events",
  product = "product",
  productInformationManagement = "product-information-management",
  productionManagement = "production-management",
  productionProcess = "production-process",
  productTraceability = "product-traceability",
  purchasingManagement = "purchasing-management",
  qualityProblemTracking = "quality-problem-tracking",
  questionCircle = "question-circle",
  radio = "radio",
  retry = "retry",
  salesManagement = "sales-management",
  select = "select",
  shanghaiElectric = "shanghai-electric",
  shipmentsDetection = "shipments-detection",
  slimCross = "slim-cross",
  switch = "switch",
  textArea = "text-area",
  tick = "tick",
  toolingManagement = "tooling-management",
  upload = "upload",
  uploadBox = "uploadbox",
  users = "users",
  warehouseIn = "warehouse-in",
  warehouseOut = "warehouse-out",
  warnCircleOutline = "warn-circle-outline",
  wechat = "wechat",
  wechatCircle = "wechat-circle",
  zoomIn = "zoom-in",
  zoomOut = "zoom-out"
}

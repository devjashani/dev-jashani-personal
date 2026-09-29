"use client";

import React, { Component, ErrorInfo, ReactNode } from "react";
import { CanvasFallback } from "./CanvasFallback";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

export class CanvasErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.warn("Canvas WebGL error caught:", error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return <CanvasFallback />;
    }
    return this.props.children;
  }
}

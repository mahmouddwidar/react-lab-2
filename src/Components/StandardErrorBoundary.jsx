import React, { Component } from "react";
import ErrorPage from "./ErrorPage";

export default class StandardErrorBoundary extends Component {
    constructor() {
        super();

        this.state = {
            hasError: false,
            error: null,
        }
    }

    static getDerivedStateFromError(error) {
        return {
            hasError: true,
            error: error,
        }
    }

    componentDidCatch(error, message) {
        console.log("There's an error: ", error, message);
    }

    render() {
        return <div>
            { this.state.hasError ? <ErrorPage /> : this.props.children}
        </div>;
    }
}

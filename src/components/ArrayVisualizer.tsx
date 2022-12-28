import React from "react";

export default function ArrayVisualizer(args: any){
    return (<div className="array-visualizer-container">
        <div className="array-visualizer-array">
            {args.children}
        </div>
    </div>);
}
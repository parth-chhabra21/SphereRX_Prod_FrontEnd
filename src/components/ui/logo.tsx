import * as React from "react";

function LogoWithCaption(){
    return  (
            <div className="flex items-center gap-2 p-2">
              <div className="flex flex-col">
                <img src="images/logo.png" className="h-12 w-auto px-2 object-contain text-primary-foreground"/>
                <span className="text-xs text-gray-500 -mt-1">Innovation Through Collaboration</span>
              </div>
            </div>
    );
}

function LogoOnly(){
    return  (
            <div className="flex items-center gap-2 p-2">
              <div className="flex flex-col">
                <img src="images/logo.png" className="h-12 w-auto px-2 object-contain text-primary-foreground"/>
              </div>
            </div>
    );
}

export {LogoWithCaption, LogoOnly};

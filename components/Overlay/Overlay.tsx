import React, { useMemo } from "react";
import { OverlayViewF, OverlayView } from "@react-google-maps/api";

const Overlay = () => {
  const center = { lat: 53.344250668504806, lng: -6.261668903294844 };

  return (
    <OverlayViewF
      position={center}
      mapPaneName={OverlayView.FLOAT_PANE}
      // getPixelPositionOffset=
    >
      <div
        className="bg-white w-96 h-32 relative rounded-lg flex"
        style={{
          boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.25)",
        }}
      >
        <img
          src="https://a0.muscache.com/im/pictures/miso/Hosting-45016629/original/a8d7fd19-d21d-4cef-9c95-3194b621a3d4.jpeg?im_w=720"
          alt=""
          className="w-1/3 h-full flex-auto object-cover rounded-l-lg"
        />
        <div className="w-2/3 flex-auto p-2">
          <p className="font-medium text-base">Entire cottage</p>
          <p className="text-sm text-gray-500">
            4 guests · 2 bedrooms · 2 beds
          </p>
          <p className="text-sm text-gray-500">2 baths</p>
          <p className="text-sm text-gray-500">Wifi · Kitchen · Free parking</p>
          <p className="text-sm text-gray-500">Cancellation flexibility</p>
        </div>
      </div>
    </OverlayViewF>
  );
};

export default Overlay;

import React, { useMemo } from "react";
import { OverlayViewF, OverlayView } from "@react-google-maps/api";

interface IOverlay {
  position: google.maps.LatLngLiteral;
}

const Overlay = ({ position }: IOverlay) => {
  return (
    <OverlayViewF
      position={position}
      mapPaneName={OverlayView.FLOAT_PANE}
      getPixelPositionOffset={(width, height) =>
        ({
          x: -(width / 2),
          y: -(height * 1.5),
        } as google.maps.Point)
      }
    >
      <div
        className="bg-white w-80 h-28 lg:w-96 lg:h-32 relative rounded-lg flex"
        style={{
          boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.25)",
        }}
      >
        <img
          src="https://a0.muscache.com/im/pictures/miso/Hosting-45016629/original/a8d7fd19-d21d-4cef-9c95-3194b621a3d4.jpeg?im_w=720"
          alt=""
          className="w-1/3 h-full flex-auto object-cover rounded-l-lg"
        />
        <div className="w-2/3 flex-auto p-1 lg:p-2">
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

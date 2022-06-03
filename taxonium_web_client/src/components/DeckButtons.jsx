import {
  BiZoomIn,
  BiZoomOut,
  BiCamera,
  BiMoveVertical,
  BiMoveHorizontal,
} from "react-icons/bi";

import { TiZoom, TiCog } from "react-icons/ti";
import { ClipLoader } from "react-spinners";

const TaxButton = ({ children, onClick, title }) => {
  return (
    <button
      className=" w-12 h-10 bg-gray-100 p-1 rounded border-gray-300 text-gray-700  opacity-70  hover:opacity-100 mr-1 z-50 mt-auto mb-1
      shadow-md "
      onClick={onClick}
      title={title}
    >
      {children}
    </button>
  );
};

export const DeckButtons = ({
  loading,
  setZoomAxis,
  zoomAxis,
  snapshot,
  zoomIncrement,
  requestOpenSettings,
}) => {
  return (
    <div
      style={{
        position: "absolute",
        right: "0.2em",
        bottom: "0.2em",
        zIndex: 10,
      }}
      className="flex justify-end"
    >
      {loading && (
        <div className="mr-4 mt-auto inline-block">
          <ClipLoader size={24} color="#444444" />
        </div>
      )}
      <TaxButton
        onClick={() => {
          requestOpenSettings();
        }}
        title="Settings"
      >
        <TiCog className="mx-auto w-5 h-5 inline-block" />
      </TaxButton>
      <TaxButton
        onClick={() => {
          setZoomAxis(zoomAxis === "X" ? "Y" : "X");
        }}
        title={
          zoomAxis === "X"
            ? "Switch to vertical zoom"
            : "Switch to horizontal zoom (you can also hold Ctrl key)"
        }
      >
        <TiZoom className="mx-auto  w-5 h-5 inline-block m-0" />
        {zoomAxis === "Y" ? (
          <BiMoveVertical className="mx-auto  w-5 h-5 inline-block m-0" />
        ) : (
          <>
            <BiMoveHorizontal className="mx-auto  w-5 h-5 inline-block m-0" />
          </>
        )}
      </TaxButton>

      <TaxButton
        onClick={() => {
          snapshot();
        }}
        title="Take screenshot"
      >
        <BiCamera className="mx-auto  w-5 h-5 inline-block" />
      </TaxButton>
      <div className="">
        <div>
          <TaxButton
            onClick={() => {
              zoomIncrement(0.6, "Y");
            }}
            title="Zoom in vertically"
          >
            <BiZoomIn className="mx-auto  w-5 h-5 inline-block" />
            <BiMoveVertical className="mx-auto  w-3 h-3 inline-block" />
          </TaxButton>
          <TaxButton
            onClick={() => {
              zoomIncrement(-0.6, "Y");
            }}
            title="Zoom out vertically"
          >
            <BiZoomOut className="mx-auto w-5 h-5 inline-block" />
            <BiMoveVertical className="mx-auto  w-3 h-3 inline-block" />
          </TaxButton>
        </div>
        <div>
          <TaxButton
            onClick={() => {
              zoomIncrement(0.6, "X");
            }}
            title="Zoom in horizontally"
          >
            <BiZoomIn className="mx-auto  w-5 h-5 inline-block" />
            <BiMoveHorizontal className="mx-auto  w-3 h-3 inline-block" />
          </TaxButton>
          <TaxButton
            onClick={() => {
              zoomIncrement(-0.6, "X");
            }}
            title="Zoom out horizontally"
          >
            <BiZoomOut className="mx-auto w-5 h-5 inline-block" />
            <BiMoveHorizontal className="mx-auto  w-3 h-3 inline-block" />
          </TaxButton>
        </div>
      </div>
    </div>
  );
};

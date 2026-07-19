import type Color from "../../classes/color";

interface ContrastPreviewProps {
  backgroundColor: Color;
  foregroundColor: Color;
}

function ContrastPreview({
  backgroundColor,
  foregroundColor,
}: ContrastPreviewProps) {
  return (
    <div
      className="flex justify-center w-full p-6"
      style={{ backgroundColor: backgroundColor.hexCode }}
    >
      <p style={{ color: foregroundColor.hexCode }}>
        This is what {foregroundColor.name} looks like on {backgroundColor.name}
      </p>
    </div>
  );
}

export default ContrastPreview;

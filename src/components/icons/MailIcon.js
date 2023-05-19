import * as React from 'react';
import {Svg, G, Defs, Path, ClipPath, Rect} from 'react-native-svg';

function MailIcon({width, height, color}) {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <G clip-path="url(#clip0_8_10789)">
        <Path
          d="M23.954 5.54187L15.536 13.9599C14.5974 14.8961 13.3257 15.4219 12 15.4219C10.6743 15.4219 9.40263 14.8961 8.464 13.9599L0.046 5.54187C0.032 5.69987 0 5.84287 0 5.99987V17.9999C0.00158786 19.3255 0.528882 20.5963 1.46622 21.5337C2.40356 22.471 3.67441 22.9983 5 22.9999H19C20.3256 22.9983 21.5964 22.471 22.5338 21.5337C23.4711 20.5963 23.9984 19.3255 24 17.9999V5.99987C24 5.84287 23.968 5.69987 23.954 5.54187Z"
          fill={color || 'black'}
        />
        <Path
          d="M14.1221 12.5459L23.2561 3.41088C22.8137 2.6772 22.1896 2.06992 21.4441 1.64761C20.6986 1.2253 19.8569 1.00222 19.0001 0.999878H5.00014C4.14336 1.00222 3.30164 1.2253 2.55617 1.64761C1.81069 2.06992 1.18662 2.6772 0.744141 3.41088L9.87814 12.5459C10.4417 13.1072 11.2047 13.4223 12.0001 13.4223C12.7956 13.4223 13.5586 13.1072 14.1221 12.5459Z"
          fill={color || 'black'}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_8_10789">
          <Rect width={width} height={height} />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default MailIcon;
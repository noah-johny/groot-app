import * as React from 'react';
import {Svg, Path, G, ClipPath, Rect, Defs} from 'react-native-svg';

function HomeIcon({width, height, isFilled}) {
  return (
    <Svg width={width} height={height} viewBox="0 0 26 26" fill="none">
      <G clip-path="url(#clip0_403_166)">
        {isFilled ? (
          <G>
            <Path
              d="M12 15.3933C10.3432 15.3933 9 16.7365 9 18.3933V24.3933H15V18.3933C15 16.7365 13.6568 15.3933 12 15.3933Z"
              fill="#151810"
            />
            <Path
              d="M17 18.3934V24.3934H21C22.6568 24.3934 24 23.0502 24 21.3934V12.2724C24.0002 11.7529 23.7983 11.2536 23.437 10.8804L14.939 1.69334C13.4396 0.0709915 10.9089 -0.0286179 9.28655 1.47082C9.20948 1.54207 9.13523 1.61627 9.06403 1.69334L0.581016 10.8774C0.208734 11.2522 -0.000140554 11.7591 7.09607e-08 12.2874V21.3934C7.09607e-08 23.0502 1.34316 24.3934 3 24.3934H6.99998V18.3934C7.01869 15.6665 9.22027 13.4398 11.8784 13.3757C14.6255 13.3094 16.9791 15.5741 17 18.3934Z"
              fill="#151810"
            />
            <Path
              d="M12 15.3933C10.3432 15.3933 9 16.7365 9 18.3933V24.3933H15V18.3933C15 16.7365 13.6568 15.3933 12 15.3933Z"
              fill="#151810"
            />
          </G>
        ) : (
          <Path
            d="M23.121 9.06899L15.536 1.48299C14.5973 0.546978 13.3257 0.0213623 12 0.0213623C10.6744 0.0213623 9.40277 0.546978 8.46401 1.48299L0.879012 9.06899C0.599438 9.34677 0.377782 9.67729 0.226895 10.0414C0.0760072 10.4055 -0.0011104 10.7959 1.20795e-05 11.19V21.007C1.20795e-05 21.8026 0.316083 22.5657 0.878692 23.1283C1.4413 23.6909 2.20436 24.007 3.00001 24.007H21C21.7957 24.007 22.5587 23.6909 23.1213 23.1283C23.6839 22.5657 24 21.8026 24 21.007V11.19C24.0011 10.7959 23.924 10.4055 23.7731 10.0414C23.6222 9.67729 23.4006 9.34677 23.121 9.06899ZM15 22.007H9.00001V18.073C9.00001 17.2773 9.31608 16.5143 9.87869 15.9517C10.4413 15.3891 11.2044 15.073 12 15.073C12.7957 15.073 13.5587 15.3891 14.1213 15.9517C14.6839 16.5143 15 17.2773 15 18.073V22.007ZM22 21.007C22 21.2722 21.8947 21.5266 21.7071 21.7141C21.5196 21.9016 21.2652 22.007 21 22.007H17V18.073C17 16.7469 16.4732 15.4751 15.5355 14.5375C14.5979 13.5998 13.3261 13.073 12 13.073C10.6739 13.073 9.40216 13.5998 8.46448 14.5375C7.5268 15.4751 7.00001 16.7469 7.00001 18.073V22.007H3.00001C2.7348 22.007 2.48044 21.9016 2.29291 21.7141C2.10537 21.5266 2.00001 21.2722 2.00001 21.007V11.19C2.00094 10.925 2.1062 10.671 2.29301 10.483L9.87801 2.89999C10.4417 2.33892 11.2047 2.02393 12 2.02393C12.7953 2.02393 13.5583 2.33892 14.122 2.89999L21.707 10.486C21.8931 10.6732 21.9983 10.926 22 11.19V21.007Z"
            fill="#151810"
          />
        )}
      </G>
      <Defs>
        <ClipPath id="clip0_403_166">
          <Rect width="24" height="24" fill="white" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default HomeIcon;

import React from "react";

const TopStates = ({ title, className }) => {
  return (
    <div
      className={`bg-white p-4 shadow-md rounded-md flex flex-col gap-2 ${className}`}
    >
      <h1 className="text-[20px] font-semibold w-full">{title}</h1>

      <svg
        width="100%"
        height="100%"
        // viewBox="0 0 100% 100%"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          y="0.611633"
          width="272"
          height="29"
          rx="4"
          fill="url(#paint0_linear_0_1)"
        />
        <path
          d="M17.3714 10.4298V20.6116H15.7308L10.9332 13.6763H10.8487V20.6116H9.00426V10.4298H10.6548L15.4474 17.3702H15.5369V10.4298H17.3714ZM18.6852 10.4298H20.7683L23.2591 14.9341H23.3585L25.8493 10.4298H27.9324L24.2285 16.8133V20.6116H22.389V16.8133L18.6852 10.4298Z"
          fill="#131313"
        />
        <path
          d="M243.504 11.7273V19H242.403V12.8281H242.36L240.62 13.9645V12.9134L242.435 11.7273H243.504ZM245.471 19V18.2045L247.932 15.6548C248.195 15.3778 248.411 15.1352 248.582 14.9268C248.755 14.7161 248.884 14.5161 248.969 14.3267C249.054 14.1373 249.097 13.9361 249.097 13.723C249.097 13.4815 249.04 13.2732 248.926 13.098C248.813 12.9205 248.658 12.7843 248.461 12.6896C248.265 12.5926 248.043 12.544 247.797 12.544C247.537 12.544 247.309 12.5973 247.115 12.7038C246.921 12.8104 246.772 12.9607 246.668 13.1548C246.564 13.349 246.512 13.5762 246.512 13.8366H245.464C245.464 13.3939 245.566 13.0069 245.769 12.6754C245.973 12.344 246.252 12.0871 246.607 11.9048C246.963 11.7202 247.366 11.6278 247.818 11.6278C248.275 11.6278 248.678 11.719 249.026 11.9013C249.376 12.0812 249.65 12.3274 249.846 12.6399C250.043 12.95 250.141 13.3004 250.141 13.6911C250.141 13.9609 250.09 14.2249 249.988 14.483C249.889 14.741 249.715 15.0286 249.466 15.3459C249.218 15.6607 248.872 16.0431 248.429 16.4929L246.984 18.0057V18.0589H250.258V19H245.471ZM254.136 19.1207C253.575 19.1184 253.095 18.9704 252.698 18.6768C252.3 18.3833 251.996 17.956 251.785 17.3949C251.574 16.8338 251.469 16.1579 251.469 15.3672C251.469 14.5788 251.574 13.9053 251.785 13.3466C251.998 12.7879 252.303 12.3617 252.701 12.0682C253.101 11.7746 253.579 11.6278 254.136 11.6278C254.692 11.6278 255.169 11.7758 255.567 12.0717C255.965 12.3653 256.269 12.7914 256.48 13.3501C256.693 13.9065 256.799 14.5788 256.799 15.3672C256.799 16.1603 256.694 16.8374 256.483 17.3984C256.272 17.9571 255.968 18.3845 255.57 18.6804C255.173 18.974 254.695 19.1207 254.136 19.1207ZM254.136 18.1726C254.628 18.1726 255.013 17.9323 255.29 17.4517C255.569 16.9711 255.709 16.2763 255.709 15.3672C255.709 14.7635 255.645 14.2533 255.517 13.8366C255.392 13.4176 255.211 13.1004 254.974 12.8849C254.74 12.6671 254.46 12.5582 254.136 12.5582C253.646 12.5582 253.261 12.7997 252.982 13.2827C252.702 13.7656 252.561 14.4605 252.559 15.3672C252.559 15.9732 252.622 16.4858 252.747 16.9048C252.875 17.3215 253.056 17.6375 253.291 17.853C253.525 18.0661 253.807 18.1726 254.136 18.1726ZM258.158 19V11.7273H259.256V15.2003H259.344L262.395 11.7273H263.776L260.843 15.0014L263.787 19H262.466L260.115 15.7507L259.256 16.7379V19H258.158Z"
          fill="#131313"
        />
        <rect
          y="37.6116"
          width="229"
          height="29"
          rx="4"
          fill="url(#paint1_linear_0_1)"
        />
        <path
          d="M9.00426 47.4298H11.2614L14.2841 54.8077H14.4034L17.4261 47.4298H19.6832V57.6116H17.9134V50.6166H17.8189L15.005 57.5818H13.6825L10.8686 50.6017H10.7741V57.6116H9.00426V47.4298ZM22.9993 57.6116H21.0305L24.6151 47.4298H26.892L30.4815 57.6116H28.5128L25.7933 49.5179H25.7138L22.9993 57.6116ZM23.0639 53.6194H28.4332V55.101H23.0639V53.6194Z"
          fill="#131313"
        />
        <path
          d="M204.743 56.0994C204.234 56.0994 203.784 56.0118 203.393 55.8366C203.005 55.6615 202.701 55.42 202.481 55.1122C202.261 54.8045 202.152 54.4541 202.154 54.0611C202.152 53.7533 202.214 53.4704 202.342 53.2124C202.473 52.9519 202.649 52.7353 202.871 52.5625C203.094 52.3873 203.343 52.276 203.617 52.2287V52.1861C203.255 52.0985 202.965 51.9044 202.747 51.6037C202.529 51.303 202.422 50.9574 202.424 50.5668C202.422 50.1951 202.52 49.8636 202.719 49.5724C202.92 49.2789 203.196 49.0481 203.546 48.88C203.897 48.7119 204.295 48.6278 204.743 48.6278C205.186 48.6278 205.581 48.7131 205.929 48.8835C206.279 49.0516 206.555 49.2824 206.756 49.576C206.958 49.8672 207.059 50.1974 207.062 50.5668C207.059 50.9574 206.948 51.303 206.728 51.6037C206.508 51.9044 206.221 52.0985 205.869 52.1861V52.2287C206.141 52.276 206.386 52.3873 206.604 52.5625C206.824 52.7353 206.999 52.9519 207.129 53.2124C207.262 53.4704 207.329 53.7533 207.332 54.0611C207.329 54.4541 207.218 54.8045 206.998 55.1122C206.778 55.42 206.472 55.6615 206.082 55.8366C205.693 56.0118 205.247 56.0994 204.743 56.0994ZM204.743 55.201C205.044 55.201 205.304 55.1513 205.524 55.0518C205.744 54.95 205.915 54.8092 206.036 54.6293C206.156 54.447 206.218 54.2339 206.22 53.9901C206.218 53.7367 206.152 53.513 206.021 53.3189C205.893 53.1248 205.719 52.9721 205.499 52.8608C205.279 52.7495 205.027 52.6939 204.743 52.6939C204.456 52.6939 204.202 52.7495 203.979 52.8608C203.757 52.9721 203.582 53.1248 203.454 53.3189C203.326 53.513 203.263 53.7367 203.266 53.9901C203.263 54.2339 203.321 54.447 203.44 54.6293C203.56 54.8092 203.732 54.95 203.955 55.0518C204.177 55.1513 204.44 55.201 204.743 55.201ZM204.743 51.8168C204.984 51.8168 205.199 51.7682 205.386 51.6712C205.573 51.5741 205.719 51.4392 205.826 51.2663C205.935 51.0935 205.991 50.8911 205.993 50.6591C205.991 50.4318 205.936 50.233 205.83 50.0625C205.725 49.892 205.58 49.7607 205.393 49.6683C205.206 49.5736 204.989 49.5263 204.743 49.5263C204.492 49.5263 204.272 49.5736 204.082 49.6683C203.895 49.7607 203.75 49.892 203.646 50.0625C203.541 50.233 203.491 50.4318 203.493 50.6591C203.491 50.8911 203.543 51.0935 203.649 51.2663C203.756 51.4392 203.902 51.5741 204.089 51.6712C204.279 51.7682 204.497 51.8168 204.743 51.8168ZM211.136 56.1207C210.575 56.1184 210.095 55.9704 209.698 55.6768C209.3 55.3833 208.996 54.956 208.785 54.3949C208.574 53.8338 208.469 53.1579 208.469 52.3672C208.469 51.5788 208.574 50.9053 208.785 50.3466C208.998 49.7879 209.303 49.3617 209.701 49.0682C210.101 48.7746 210.579 48.6278 211.136 48.6278C211.692 48.6278 212.169 48.7758 212.567 49.0717C212.965 49.3653 213.269 49.7914 213.48 50.3501C213.693 50.9065 213.799 51.5788 213.799 52.3672C213.799 53.1603 213.694 53.8374 213.483 54.3984C213.272 54.9571 212.968 55.3845 212.57 55.6804C212.173 55.974 211.695 56.1207 211.136 56.1207ZM211.136 55.1726C211.628 55.1726 212.013 54.9323 212.29 54.4517C212.569 53.9711 212.709 53.2763 212.709 52.3672C212.709 51.7635 212.645 51.2533 212.517 50.8366C212.392 50.4176 212.211 50.1004 211.974 49.8849C211.74 49.6671 211.46 49.5582 211.136 49.5582C210.646 49.5582 210.261 49.7997 209.982 50.2827C209.702 50.7656 209.561 51.4605 209.559 52.3672C209.559 52.9732 209.622 53.4858 209.747 53.9048C209.875 54.3215 210.056 54.6375 210.291 54.853C210.525 55.0661 210.807 55.1726 211.136 55.1726ZM215.158 56V48.7273H216.256V52.2003H216.344L219.395 48.7273H220.776L217.843 52.0014L220.787 56H219.466L217.115 52.7507L216.256 53.7379V56H215.158Z"
          fill="#131313"
        />
        <rect
          y="74.6116"
          width="207"
          height="29"
          rx="4"
          fill="url(#paint2_linear_0_1)"
        />
        <path
          d="M17.3714 84.4298V94.6116H15.7308L10.9332 87.6763H10.8487V94.6116H9.00426V84.4298H10.6548L15.4474 91.3702H15.5369V84.4298H17.3714ZM19.3812 94.6116V84.4298H21.2257V88.7402H25.9437V84.4298H27.7931V94.6116H25.9437V90.2863H21.2257V94.6116H19.3812Z"
          fill="#131313"
        />
        <path
          d="M181.214 93L184.389 86.7216V86.6683H180.717V85.7273H185.525V86.7003L182.361 93H181.214ZM189.136 93.1207C188.575 93.1184 188.095 92.9704 187.698 92.6768C187.3 92.3833 186.996 91.956 186.785 91.3949C186.574 90.8338 186.469 90.1579 186.469 89.3672C186.469 88.5788 186.574 87.9053 186.785 87.3466C186.998 86.7879 187.303 86.3617 187.701 86.0682C188.101 85.7746 188.579 85.6278 189.136 85.6278C189.692 85.6278 190.169 85.7758 190.567 86.0717C190.965 86.3653 191.269 86.7914 191.48 87.3501C191.693 87.9065 191.799 88.5788 191.799 89.3672C191.799 90.1603 191.694 90.8374 191.483 91.3984C191.272 91.9571 190.968 92.3845 190.57 92.6804C190.173 92.974 189.695 93.1207 189.136 93.1207ZM189.136 92.1726C189.628 92.1726 190.013 91.9323 190.29 91.4517C190.569 90.9711 190.709 90.2763 190.709 89.3672C190.709 88.7635 190.645 88.2533 190.517 87.8366C190.392 87.4176 190.211 87.1004 189.974 86.8849C189.74 86.6671 189.46 86.5582 189.136 86.5582C188.646 86.5582 188.261 86.7997 187.982 87.2827C187.702 87.7656 187.561 88.4605 187.559 89.3672C187.559 89.9732 187.622 90.4858 187.747 90.9048C187.875 91.3215 188.056 91.6375 188.291 91.853C188.525 92.0661 188.807 92.1726 189.136 92.1726ZM193.158 93V85.7273H194.256V89.2003H194.344L197.395 85.7273H198.776L195.843 89.0014L198.787 93H197.466L195.115 89.7507L194.256 90.7379V93H193.158Z"
          fill="#131313"
        />
        <rect
          y="111.612"
          width="150"
          height="29"
          rx="4"
          fill="url(#paint3_linear_0_1)"
        />
        <path
          d="M18.1023 126.521C18.1023 127.618 17.8968 128.557 17.4858 129.34C17.0781 130.118 16.5213 130.715 15.8153 131.129C15.1127 131.544 14.3156 131.751 13.424 131.751C12.5324 131.751 11.7337 131.544 11.0277 131.129C10.325 130.712 9.76823 130.114 9.35724 129.335C8.94957 128.552 8.74574 127.614 8.74574 126.521C8.74574 125.424 8.94957 124.486 9.35724 123.707C9.76823 122.925 10.325 122.326 11.0277 121.912C11.7337 121.498 12.5324 121.291 13.424 121.291C14.3156 121.291 15.1127 121.498 15.8153 121.912C16.5213 122.326 17.0781 122.925 17.4858 123.707C17.8968 124.486 18.1023 125.424 18.1023 126.521ZM16.2479 126.521C16.2479 125.748 16.1269 125.097 15.8849 124.567C15.6463 124.033 15.3149 123.631 14.8906 123.359C14.4664 123.084 13.9775 122.946 13.424 122.946C12.8705 122.946 12.3816 123.084 11.9574 123.359C11.5331 123.631 11.2 124.033 10.9581 124.567C10.7195 125.097 10.6001 125.748 10.6001 126.521C10.6001 127.293 10.7195 127.946 10.9581 128.48C11.2 129.01 11.5331 129.413 11.9574 129.688C12.3816 129.959 12.8705 130.095 13.424 130.095C13.9775 130.095 14.4664 129.959 14.8906 129.688C15.3149 129.413 15.6463 129.01 15.8849 128.48C16.1269 127.946 16.2479 127.293 16.2479 126.521ZM19.8461 131.612V121.43H23.6642C24.4464 121.43 25.1027 121.566 25.633 121.837C26.1666 122.109 26.5693 122.49 26.8411 122.981C27.1162 123.468 27.2537 124.037 27.2537 124.686C27.2537 125.339 27.1145 125.906 26.8361 126.386C26.561 126.864 26.155 127.233 25.6181 127.495C25.0811 127.754 24.4216 127.883 23.6394 127.883H20.9199V126.352H23.3908C23.8482 126.352 24.2227 126.289 24.5144 126.163C24.806 126.034 25.0215 125.846 25.1607 125.601C25.3032 125.352 25.3745 125.047 25.3745 124.686C25.3745 124.325 25.3032 124.017 25.1607 123.761C25.0182 123.503 24.8011 123.307 24.5094 123.175C24.2177 123.039 23.8416 122.971 23.3809 122.971H21.6905V131.612H19.8461ZM25.106 126.998L27.6266 131.612H25.5684L23.0925 126.998H25.106Z"
          fill="#131313"
        />
        <path
          d="M125.803 130.099C125.358 130.099 124.958 130.014 124.603 129.844C124.25 129.671 123.969 129.434 123.758 129.134C123.547 128.833 123.435 128.49 123.42 128.104H124.486C124.512 128.416 124.65 128.673 124.901 128.874C125.152 129.076 125.453 129.176 125.803 129.176C126.083 129.176 126.33 129.112 126.545 128.984C126.763 128.854 126.934 128.675 127.057 128.448C127.182 128.221 127.245 127.962 127.245 127.67C127.245 127.375 127.181 127.111 127.053 126.879C126.925 126.647 126.749 126.464 126.524 126.332C126.302 126.199 126.046 126.132 125.757 126.129C125.537 126.129 125.316 126.167 125.093 126.243C124.871 126.319 124.691 126.418 124.553 126.541L123.548 126.392L123.957 122.727H127.955V123.668H124.869L124.638 125.703H124.681C124.823 125.566 125.011 125.451 125.246 125.359C125.482 125.266 125.736 125.22 126.006 125.22C126.448 125.22 126.843 125.326 127.188 125.536C127.536 125.747 127.81 126.035 128.009 126.399C128.21 126.761 128.309 127.178 128.307 127.649C128.309 128.12 128.203 128.54 127.987 128.91C127.774 129.279 127.478 129.57 127.099 129.783C126.723 129.994 126.291 130.099 125.803 130.099ZM132.136 130.121C131.575 130.118 131.095 129.97 130.698 129.677C130.3 129.383 129.996 128.956 129.785 128.395C129.574 127.834 129.469 127.158 129.469 126.367C129.469 125.579 129.574 124.905 129.785 124.347C129.998 123.788 130.303 123.362 130.701 123.068C131.101 122.775 131.579 122.628 132.136 122.628C132.692 122.628 133.169 122.776 133.567 123.072C133.965 123.365 134.269 123.791 134.48 124.35C134.693 124.906 134.799 125.579 134.799 126.367C134.799 127.16 134.694 127.837 134.483 128.398C134.272 128.957 133.968 129.384 133.57 129.68C133.173 129.974 132.695 130.121 132.136 130.121ZM132.136 129.173C132.628 129.173 133.013 128.932 133.29 128.452C133.569 127.971 133.709 127.276 133.709 126.367C133.709 125.763 133.645 125.253 133.517 124.837C133.392 124.418 133.211 124.1 132.974 123.885C132.74 123.667 132.46 123.558 132.136 123.558C131.646 123.558 131.261 123.8 130.982 124.283C130.702 124.766 130.561 125.46 130.559 126.367C130.559 126.973 130.622 127.486 130.747 127.905C130.875 128.321 131.056 128.638 131.291 128.853C131.525 129.066 131.807 129.173 132.136 129.173ZM136.158 130V122.727H137.256V126.2H137.344L140.395 122.727H141.776L138.843 126.001L141.787 130H140.466L138.115 126.751L137.256 127.738V130H136.158Z"
          fill="#131313"
        />
        <defs>
          <linearGradient
            id="paint0_linear_0_1"
            x1="-7"
            y1="15"
            x2="306"
            y2="15"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#FFCD71" />
            <stop offset="1" stopColor="#FFCD71" stopOpacity="0" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_0_1"
            x1="-5.89338"
            y1="52"
            x2="257.625"
            y2="52"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#FFCD71" />
            <stop offset="1" stopColor="#FFCD71" stopOpacity="0" />
          </linearGradient>
          <linearGradient
            id="paint2_linear_0_1"
            x1="-5.32721"
            y1="89"
            x2="232.875"
            y2="89"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#FFCD71" />
            <stop offset="1" stopColor="#FFCD71" stopOpacity="0" />
          </linearGradient>
          <linearGradient
            id="paint3_linear_0_1"
            x1="-3.86029"
            y1="126"
            x2="168.75"
            y2="126"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#FFCD71" />
            <stop offset="1" stopColor="#FFCD71" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default TopStates;

import React from "react";

const Chart = ({ title, value, description, navLink, className }) => {
  return (
    <div
      className={`bg-white p-4 shadow-md rounded-md flex flex-col gap-2 ${className}`}
    >
      <h1 className="text-[20px] font-semibold w-full">{title}</h1>

      <svg
        width="100%"
        height="102"
        viewBox="0 0 212 102"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9.31555 102C4.68987 102 0.903382 98.2435 1.29272 93.6343C2.18207 83.1055 4.74648 72.7578 8.90939 62.9663C14.1708 50.5911 21.8825 39.3467 31.6043 29.8751C41.326 20.4035 52.8675 12.8903 65.5696 7.76428C78.2717 2.6383 91.8857 -1.75652e-06 105.634 0C119.383 1.75652e-06 132.997 2.63831 145.699 7.76429C158.401 12.8903 169.943 20.4035 179.664 29.8751C189.386 39.3467 197.098 50.5911 202.359 62.9663C206.522 72.7578 209.087 83.1055 209.976 93.6343C210.365 98.2436 206.579 102 201.953 102C197.327 102 193.621 98.2409 193.158 93.6385C192.314 85.2548 190.204 77.0226 186.883 69.2117C182.464 58.8165 175.986 49.3712 167.82 41.4151C159.653 33.459 149.959 27.1478 139.289 22.842C128.619 18.5362 117.183 16.32 105.634 16.32C94.0855 16.32 82.6497 18.5362 71.9799 22.842C61.3102 27.1478 51.6154 33.459 43.4491 41.4151C35.2828 49.3712 28.805 58.8165 24.3854 69.2117C21.0646 77.0225 18.9547 85.2547 18.1109 93.6384C17.6477 98.2409 13.9412 102 9.31555 102Z"
          fill="#FFF7E8"
        />
        <path
          d="M9.31555 102C4.68987 102 0.903341 98.2429 1.29256 93.6336C3.22634 70.7333 13.0558 49.0453 29.3155 32.1762L41.5265 43.348C28.1846 57.1901 19.9968 74.8947 18.1107 93.6381C17.6476 98.2406 13.9412 102 9.31555 102Z"
          fill="#D9D9D9"
        />
        <path
          d="M9.31555 102C4.68987 102 0.903356 98.2433 1.29265 93.6341C2.86113 75.0633 9.62873 57.2069 20.9349 42.0459C33.9304 24.6194 52.2549 11.6485 73.282 4.99223C94.3092 -1.66408 116.96 -1.66408 137.987 4.99225C156.265 10.7785 172.502 21.3364 184.971 35.4448C188.059 38.9396 187.197 44.2665 183.39 46.9612C179.714 49.563 174.663 48.727 171.644 45.3856C161.256 33.8891 147.857 25.2766 132.81 20.5135C115.148 14.9222 96.1212 14.9222 78.4584 20.5135C60.7956 26.1048 45.403 37.0003 34.4868 51.6386C25.2607 64.0103 19.6325 78.5187 18.1108 93.6383C17.6476 98.2407 13.9412 102 9.31555 102Z"
          fill="#FFCD71"
        />
        <path
          d="M84.3664 94.3182C82.7376 94.3182 81.2982 94.0379 80.0482 93.4773C78.8058 92.9167 77.8323 92.1439 77.1277 91.1591C76.4232 90.1742 76.0747 89.053 76.0823 87.7955C76.0747 86.8106 76.2755 85.9053 76.6846 85.0795C77.1012 84.2462 77.6656 83.553 78.3777 83C79.0899 82.4394 79.8853 82.0833 80.7641 81.9318V81.7955C79.605 81.5152 78.677 80.8939 77.98 79.9318C77.283 78.9697 76.9383 77.8636 76.9459 76.6136C76.9383 75.4242 77.2527 74.3636 77.8891 73.4318C78.533 72.4924 79.4156 71.7538 80.5368 71.2159C81.658 70.678 82.9346 70.4091 84.3664 70.4091C85.783 70.4091 87.0482 70.6818 88.1618 71.2273C89.283 71.7652 90.1656 72.5038 90.8096 73.4432C91.4535 74.375 91.7793 75.4318 91.7868 76.6136C91.7793 77.8636 91.4232 78.9697 90.7187 79.9318C90.0141 80.8939 89.0974 81.5152 87.9687 81.7955V81.9318C88.8399 82.0833 89.624 82.4394 90.3209 83C91.0255 83.553 91.5861 84.2462 92.0027 85.0795C92.427 85.9053 92.6429 86.8106 92.6505 87.7955C92.6429 89.053 92.2868 90.1742 91.5823 91.1591C90.8777 92.1439 89.9005 92.9167 88.6505 93.4773C87.408 94.0379 85.98 94.3182 84.3664 94.3182ZM84.3664 91.4432C85.3285 91.4432 86.1618 91.2841 86.8664 90.9659C87.5709 90.6402 88.1164 90.1894 88.5027 89.6136C88.8891 89.0303 89.0861 88.3485 89.0937 87.5682C89.0861 86.7576 88.874 86.0417 88.4573 85.4205C88.0482 84.7992 87.4914 84.3106 86.7868 83.9545C86.0823 83.5985 85.2755 83.4205 84.3664 83.4205C83.4497 83.4205 82.6353 83.5985 81.9232 83.9545C81.2111 84.3106 80.6505 84.7992 80.2414 85.4205C79.8323 86.0417 79.6315 86.7576 79.6391 87.5682C79.6315 88.3485 79.8171 89.0303 80.1959 89.6136C80.5823 90.1894 81.1315 90.6402 81.8437 90.9659C82.5558 91.2841 83.3967 91.4432 84.3664 91.4432ZM84.3664 80.6136C85.1391 80.6136 85.8247 80.4583 86.4232 80.1477C87.0217 79.8371 87.4914 79.4053 87.8323 78.8523C88.1808 78.2992 88.3588 77.6515 88.3664 76.9091C88.3588 76.1818 88.1846 75.5455 87.8437 75C87.5103 74.4545 87.0444 74.0341 86.4459 73.7386C85.8474 73.4356 85.1543 73.2841 84.3664 73.2841C83.5633 73.2841 82.8588 73.4356 82.2527 73.7386C81.6543 74.0341 81.1883 74.4545 80.855 75C80.5217 75.5455 80.3588 76.1818 80.3664 76.9091C80.3588 77.6515 80.5255 78.2992 80.8664 78.8523C81.2073 79.4053 81.677 79.8371 82.2755 80.1477C82.8815 80.4583 83.5785 80.6136 84.3664 80.6136ZM94.6406 89.4545V86.6136L104.697 70.7273H106.936V74.9091H105.516L98.3224 86.2955V86.4773H112.107V89.4545H94.6406ZM105.675 94V88.5909L105.697 87.2955V70.7273H109.027V94H105.675ZM126.622 89.6364V88.4091C126.622 87.5303 126.804 86.7273 127.168 86C127.539 85.2652 128.077 84.678 128.781 84.2386C129.493 83.7917 130.353 83.5682 131.361 83.5682C132.391 83.5682 133.255 83.7879 133.952 84.2273C134.649 84.6667 135.175 85.2538 135.531 85.9886C135.895 86.7235 136.077 87.5303 136.077 88.4091V89.6364C136.077 90.5152 135.895 91.322 135.531 92.0568C135.168 92.7841 134.634 93.3712 133.929 93.8182C133.232 94.2576 132.376 94.4773 131.361 94.4773C130.338 94.4773 129.475 94.2576 128.77 93.8182C128.065 93.3712 127.531 92.7841 127.168 92.0568C126.804 91.322 126.622 90.5152 126.622 89.6364ZM129.27 88.4091V89.6364C129.27 90.2879 129.425 90.8788 129.736 91.4091C130.046 91.9394 130.588 92.2045 131.361 92.2045C132.126 92.2045 132.66 91.9394 132.963 91.4091C133.266 90.8788 133.418 90.2879 133.418 89.6364V88.4091C133.418 87.7576 133.27 87.1667 132.975 86.6364C132.687 86.1061 132.149 85.8409 131.361 85.8409C130.603 85.8409 130.065 86.1061 129.747 86.6364C129.429 87.1667 129.27 87.7576 129.27 88.4091ZM114.918 76.3182V75.0909C114.918 74.2121 115.1 73.4053 115.463 72.6705C115.834 71.9356 116.372 71.3485 117.077 70.9091C117.789 70.4697 118.649 70.25 119.656 70.25C120.687 70.25 121.55 70.4697 122.247 70.9091C122.944 71.3485 123.471 71.9356 123.827 72.6705C124.183 73.4053 124.361 74.2121 124.361 75.0909V76.3182C124.361 77.197 124.179 78.0038 123.815 78.7386C123.459 79.4659 122.929 80.053 122.225 80.5C121.528 80.9394 120.671 81.1591 119.656 81.1591C118.626 81.1591 117.759 80.9394 117.054 80.5C116.357 80.053 115.827 79.4659 115.463 78.7386C115.1 78.0038 114.918 77.197 114.918 76.3182ZM117.577 75.0909V76.3182C117.577 76.9697 117.728 77.5606 118.031 78.0909C118.342 78.6212 118.884 78.8864 119.656 78.8864C120.414 78.8864 120.944 78.6212 121.247 78.0909C121.558 77.5606 121.713 76.9697 121.713 76.3182V75.0909C121.713 74.4394 121.565 73.8485 121.27 73.3182C120.975 72.7879 120.437 72.5227 119.656 72.5227C118.899 72.5227 118.361 72.7879 118.043 73.3182C117.732 73.8485 117.577 74.4394 117.577 75.0909ZM115.997 94L131.997 70.7273H134.713L118.713 94H115.997Z"
          fill="#131313"
        />
      </svg>
      <a
        href=""
        className="text-dark_orange text-[14px] mt-16 flex items-center gap-2 w-full"
      >
        {navLink}
      </a>
    </div>
  );
};

export default Chart;

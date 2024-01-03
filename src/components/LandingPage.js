import React from "react";
import SearchIcon from "../Icons/SearchIcons";

const LandingPage = () => {
  return (
    <div className="tw-min-h-screen tw-bg-white tw-m-8 tw-border tw-rounded-md tw-flex tw-flex-row">
      <TopComponent />
      <RightComponent />
    </div>
  );
};

export default LandingPage;

const TopComponent = () => {
  return (
    <div className="tw-w-1/4 tw-border tw-border-r-2">
      <div className="tw-m-2 tw-h-full tw-py-7 tw-pb-10 tw-border tw-border-solid tw-flex tw-flex-col tw-justify-between">
        <LeftTop />
        <LeftBottom />
      </div>
    </div>
  );
};

const RightComponent = () => {
  return <div className="tw-w-3/4">Second</div>;
};

const LeftTop = () => {
  return (
    <div className="tw-flex tw-flex-col">
      <div className="tw-text-xl tw-text-blue-500 tw-font-bold tw-pl-2 tw-mb-2">
        Logo Here
      </div>
      <div className="search-component tw-mx-2">
        <div className="search-icon">
          <SearchIcon />
        </div>
        <div className="search-input">
          <input
            className="tw-px-2 tw-py-1 tw-w-full tw-border-solid tw-outline-none"
            type="text"
            placeholder="Search"
          />
        </div>
      </div>
      <div className="tw-flex tw-flex-col tw-mx-2 tw-my-2 tw-pb-2 tw-border-b">
        <div className="tw-flex tw-justify-start">
          <div className="tw-mr-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="tw-w-6 tw-h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 6.878V6a2.25 2.25 0 0 1 2.25-2.25h7.5A2.25 2.25 0 0 1 18 6v.878m-12 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128m-12 0A2.25 2.25 0 0 0 4.5 9v.878m13.5-3A2.25 2.25 0 0 1 19.5 9v.878m0 0a2.246 2.246 0 0 0-.75-.128H5.25c-.263 0-.515.045-.75.128m15 0A2.25 2.25 0 0 1 21 12v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6c0-.98.626-1.813 1.5-2.122"
              />
            </svg>
          </div>
          <div className="tw-font-semibold">Tasks</div>
        </div>
        <div className="tw-flex tw-justify-between tw-mx-8 tw-mt-2">
          <div className="">Today</div>
          <div className="tw-mb-1 tw-bg-violet-200 tw-px-4 tw-border tw-rounded-full">
            4
          </div>
        </div>
        <div className="tw-flex tw-justify-between tw-mx-8">
          <div className="">Important</div>
          <div className="tw-mb-1 tw-bg-green-200 tw-px-4 tw-border tw-rounded-full">
            2
          </div>
        </div>
        <div className="tw-flex tw-justify-between tw-mx-8">
          <div className="">Upcoming</div>
          <div className="tw-mb-1 tw-bg-orange-200 tw-px-4 tw-border tw-rounded-full">
            3
          </div>
        </div>
      </div>
      <div className="tw-flex tw-justify-start tw-mx-2 tw-mt-4">
        <div className="tw-mr-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="tw-w-6 tw-h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0ZM3.75 12h.007v.008H3.75V12Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm-.375 5.25h.007v.008H3.75v-.008Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
            />
          </svg>
        </div>
        <div className="tw-font-semibold">Lists</div>
      </div>
      <div className="tw-flex tw-justify-between tw-mx-8 tw-mt-2">
        <div className="">List Name 01</div>
        <div className="tw-mb-1 tw-bg-violet-200 tw-p-3 tw-border tw-rounded-full"></div>
      </div>
      <div className="tw-flex tw-justify-between tw-mx-8">
        <div className="">List Name 02</div>
        <div className="tw-mb-1 tw-bg-green-200 tw-p-3 tw-border tw-rounded-full"></div>
      </div>
      <div className="tw-flex tw-justify-start tw-ml-6 tw-items-center tw-mt-1 tw-text-blue-500 tw-cursor-pointer">
        <div className="tw-font-bold tw-text-2xl tw-mr-3">+</div>
        <div className="tw-font-medium tw-text-xl">Add new list</div>
      </div>
    </div>
  );
};

const LeftBottom = () => {
  return (
    <div className="tw-flex tw-flex-col tw-ml-5">
      <div className="tw-flex tw-flex-col tw-text-gray-600 tw-border-b">
        <div className="tw-flex tw-justify-start tw-mb-2">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="tw-w-6 tw-h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 7.5-2.25-1.313M21 7.5v2.25m0-2.25-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3 2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75 2.25-1.313M12 21.75V19.5m0 2.25-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25"
              />
            </svg>
          </div>
          <div className="tw-font-semibold tw-ml-4">Support</div>
        </div>
        <div className="tw-flex tw-justify-start tw-mb-4">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="tw-w-6 tw-h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
            </svg>
          </div>
          <div className="tw-font-semibold tw-ml-4">Settings</div>
        </div>
      </div>
      <div className="tw-my-3 tw-flex tw-flex-row tw-justify-between tw-text-gray-600 tw-mr-2">
        <div className="tw-flex tw-justify-start">
            <div className="tw-p-6 tw-rounded-full tw-bg-gray-700"></div>
            <div className="tw-flex tw-flex-col tw-ml-3">
                <div className="tw-font-bold">Kasun Tharanga</div>
                <div className="tw-text-sm">kasun@gmail.com</div>
            </div>
        </div>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="tw-w-6 tw-h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

import Link from 'next/link'

import generateSlug from '@/utils/slugify'

export default function PlaceSidebar({place}) {
	return (
	<>
		<div className="bg-light-gray p-4 rounded-lg">
		  <h2 className="text-xl font-bold mb-4">Visiting Information</h2>
		  <div className="mb-6">
		    <div className="flex items-center mb-2">
		      <span className="w-8 h-8 bg-white rounded-full flex items-center justify-center border border-gray-300">
		        <svg className="w-6 h-6 text-red-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
		          <path d="M13 8V10a5 5 0 01-5 5H0v-1h12v-1a5 5 0 015-5zM9 16V14m-7 0h14zm0 0h14v2H9z" />
		        </svg>
		      </span>
		    </div>
		    <div className="flex-1">
		      <h3 className="text-lg font-semibold mb-1">Admission</h3>
		      <p>Ticketed</p>
		    </div>
		  </div>

		  { place.address_line_1 && place.address_line_2 &&
		  <div className="mb-6">
		    <div className="flex items-center mb-2">
		      <span className="w-8 h-8 bg-white rounded-full flex items-center justify-center border border-gray-300">
		        <svg className="w-6 h-6 text-red-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
		          <path d="M10 20a10 10 0 01-10-10 10 10 0 0110-10zm5-18a8 8 0 00-8-8 8 8 0 008-8zM4.354 11.146l2.83-2.828 1.415 1.414L13.65 2.356 6.204 9.121 2.207 5.828 4.354 11.146z" />
		        </svg>
		      </span>
		    </div>
		    <div className="flex-1">
		      <h3 className="text-lg font-semibold mb-1">Address</h3>
		      <p>{`${place.address_line_1}, ${place.address_line_2}`}</p>
		    </div>
		  </div>
			}
		  
		  { place.locality &&
		  <div className="mb-6">
		    <div className="flex items-center mb-2">
		      <span className="w-8 h-8 bg-white rounded-full flex items-center justify-center border border-gray-300">
		        <svg className="w-6 h-6 text-red-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
		          <path d="M10 20a10 10 0 01-10-10 10 10 0 0110-10zm5-18a8 8 0 00-8-8 8 8 0 008-8zM4.354 11.146l2.83-2.828 1.415 1.414L13.65 2.356 6.204 9.121 2.207 5.828 4.354 11.146z" />
		        </svg>
		      </span>
		    </div>
		    <div className="flex-1">
		      <h3 className="text-lg font-semibold mb-1">Neighborhood</h3>
		      <p>
		      	<Link href={`/locality/${generateSlug(place.locality)}`}>
		      		{place.locality}
		      	</Link>
		      </p>
		    </div>
		  </div>
			}

		  { place.opening_time && place.closing_time &&
		  <div className="mb-6">
		    <div className="flex items-center mb-2">
		      <span className="w-8 h-8 bg-white rounded-full flex items-center justify-center border border-gray-300">
		        <svg className="w-6 h-6 text-red-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
		          <path d="M10 20a10 10 0 01-10-10 10 10 0 0110-10zm5-18a8 8 0 00-8-8 8 8 0 008-8zM4.354 11.146l2.83-2.828 1.415 1.414L13.65 2.356 6.204 9.121 2.207 5.828 4.354 11.146z" />
		        </svg>
		      </span>
		    </div>
		    <div className="flex-1">
		      <h3 className="text-lg font-semibold mb-1">Operating Hours</h3>
		      <p>{`${place.opening_time} - ${place.closing_time}`}</p>
		    </div>
		  </div>
			}

		  <div className="mb-6">
		    <div className="flex items-center mb-2">
		      <span className="w-8 h-8 bg-white rounded-full flex items-center justify-center border border-gray-300">
		        <svg className="w-6 h-6 text-red-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
		          <path d="M10 20a10 10 0 01-10-10 10 10 0 0110-10zm5-18a8 8 0 00-8-8 8 8 0 008-8zM4.354 11.146l2.83-2.828 1.415 1.414L13.65 2.356 6.204 9.121 2.207 5.828 4.354 11.146z" />
		        </svg>
		      </span>
		    </div>
		    <div className="flex-1">
		      <h3 className="text-lg font-semibold mb-1">Official Site</h3>
		      <p>Peranakan Museum Site</p>
		    </div>
		  </div>
		</div>
		<div className="flex flex-col">
      <div className="flex gap-6 mb-6">
        <h4 className="font-semibold text-2xl leading-9 text-black pl-6 border-l-2 border-indigo-600 border-solid">
          About Me
        </h4>
      </div>
      <img src="/img/etc/user.jpg" alt="Sandara image " className="w-max object-cover" />
      <p className="mt-4 mb-1 font-medium text-xl leading-8 text-gray-900">
        Meghana Shetty
      </p>
      <p className="font-normal text-base leading-7 text-gray-600">
        Pagedone is simply the best tool of investment in the market right now.{" "}
      </p>
      <div className="flex items-center gap-5 mt-6">
        <svg className="w-6 h-6 text-black cursor-pointer transition-all duration-500 hover:text-indigo-600" width="{32}" height="{32}" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M18.1139 14.2985L26.3866 4.88892H24.4263L17.2431 13.0591L11.5059 4.88892H4.88867L13.5645 17.2437L4.88867 27.1111H6.84915L14.4348 18.4831L20.4937 27.1111H27.1109L18.1134 14.2985H18.1139ZM15.4288 17.3526L14.5497 16.1223L7.55554 6.333H10.5667L16.2111 14.2333L17.0902 15.4636L24.4272 25.7327H21.416L15.4288 17.3531V17.3526Z"
            fill="currentColor"
          />
        </svg>
        <svg className="fill-black cursor-pointer transition-all duration-700 hover:fill-indigo-600" width="{25}" height="{25}" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M9.64011 12.4247C9.64011 10.8267 10.9542 9.53095 12.5757 9.53095C14.1971 9.53095 15.5119 10.8267 15.5119 12.4247C15.5119 14.0227 14.1971 15.3184 12.5757 15.3184C10.9542 15.3184 9.64011 14.0227 9.64011 12.4247ZM8.05282 12.4247C8.05282 14.8865 10.0777 16.8821 12.5757 16.8821C15.0737 16.8821 17.0985 14.8865 17.0985 12.4247C17.0985 9.96289 15.0737 7.96734 12.5757 7.96734C10.0777 7.96734 8.05282 9.96289 8.05282 12.4247ZM16.2206 7.7906C16.2205 7.99662 16.2824 8.19804 16.3985 8.36939C16.5146 8.54074 16.6796 8.67431 16.8727 8.75323C17.0658 8.83215 17.2783 8.85286 17.4834 8.81275C17.6884 8.77264 17.8768 8.6735 18.0247 8.52788C18.1726 8.38226 18.2733 8.19669 18.3142 7.99464C18.355 7.7926 18.3342 7.58314 18.2543 7.39277C18.1743 7.2024 18.0389 7.03966 17.8652 6.92513C17.6914 6.8106 17.4871 6.74943 17.278 6.74935H17.2776C16.9974 6.74948 16.7287 6.85921 16.5305 7.05444C16.3323 7.24967 16.2209 7.51444 16.2206 7.7906ZM9.0172 19.4905C8.15845 19.4519 7.69169 19.3109 7.38151 19.1918C6.97027 19.0341 6.67686 18.8462 6.36836 18.5425C6.05987 18.2389 5.86891 17.95 5.70952 17.5448C5.5886 17.2392 5.44556 16.7791 5.40652 15.9328C5.36382 15.0178 5.35529 14.7429 5.35529 12.4248C5.35529 10.1066 5.36452 9.83254 5.40652 8.91678C5.44563 8.07046 5.58973 7.61122 5.70952 7.30477C5.86961 6.89949 6.06029 6.61032 6.36836 6.30629C6.67643 6.00227 6.96957 5.81407 7.38151 5.65699C7.69155 5.53782 8.15845 5.39685 9.0172 5.35838C9.94565 5.31629 10.2245 5.30789 12.5757 5.30789C14.9268 5.30789 15.206 5.31699 16.1352 5.35838C16.994 5.39692 17.4599 5.53893 17.7709 5.65699C18.1821 5.81407 18.4756 6.00268 18.784 6.30629C19.0925 6.6099 19.2828 6.89949 19.4429 7.30477C19.5638 7.61032 19.7069 8.07046 19.7459 8.91678C19.7886 9.83254 19.7971 10.1066 19.7971 12.4248C19.7971 14.7429 19.7886 15.017 19.7459 15.9328C19.7068 16.7791 19.563 17.2391 19.4429 17.5448C19.2828 17.95 19.0921 18.2392 18.784 18.5425C18.476 18.8459 18.1821 19.0341 17.7709 19.1918C17.4609 19.311 16.994 19.452 16.1352 19.4905C15.2068 19.5325 14.9279 19.5409 12.5757 19.5409C10.2235 19.5409 9.94537 19.5325 9.0172 19.4905ZM8.94427 3.79671C8.0066 3.83879 7.36586 3.98532 6.8063 4.1999C6.2268 4.4215 5.73622 4.71879 5.246 5.20115C4.75578 5.68352 4.45489 6.16775 4.23004 6.73886C4.0123 7.29067 3.86362 7.92178 3.82092 8.84588C3.77751 9.77143 3.76758 10.0673 3.76758 12.4247C3.76758 14.7821 3.77751 15.078 3.82092 16.0035C3.86362 16.9277 4.0123 17.5587 4.23004 18.1105C4.45489 18.6813 4.75585 19.1661 5.246 19.6482C5.73615 20.1304 6.2268 20.4273 6.8063 20.6495C7.36692 20.8641 8.0066 21.0106 8.94427 21.0527C9.88392 21.0948 10.1837 21.1053 12.5757 21.1053C14.9677 21.1053 15.2679 21.0955 16.2071 21.0527C17.1448 21.0106 17.7851 20.8641 18.3451 20.6495C18.9242 20.4273 19.4151 20.1306 19.9054 19.6482C20.3956 19.1659 20.6958 18.6813 20.9213 18.1105C21.1391 17.5587 21.2884 16.9276 21.3304 16.0035C21.3731 15.0773 21.3831 14.7821 21.3831 12.4247C21.3831 10.0673 21.3731 9.77143 21.3304 8.84588C21.2877 7.92171 21.1391 7.29032 20.9213 6.73886C20.6958 6.1681 20.3948 5.68428 19.9054 5.20115C19.4159 4.71803 18.9242 4.4215 18.3458 4.1999C17.7851 3.98532 17.1448 3.8381 16.2078 3.79671C15.2686 3.75463 14.9684 3.74414 12.5764 3.74414C10.1844 3.74414 9.88392 3.75393 8.94427 3.79671Z"
            fill=""
          />
        </svg>
        <svg className="fill-black cursor-pointer transition-all duration-700 hover:fill-indigo-600" width="{25}" height="{25}" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M8.59827 19.4448V9.83934H5.39764V19.4448H8.59861H8.59827ZM6.99863 8.52811C8.11452 8.52811 8.80924 7.79053 8.80924 6.86876C8.78835 5.92598 8.11452 5.20898 7.01985 5.20898C5.92442 5.20898 5.20898 5.92598 5.20898 6.86867C5.20898 7.79044 5.90345 8.52803 6.97765 8.52803H6.99838L6.99863 8.52811ZM10.3699 19.4448H13.5703V14.0812C13.5703 13.7945 13.5911 13.5071 13.6757 13.3023C13.907 12.7285 14.4336 12.1345 15.318 12.1345C16.4758 12.1345 16.9392 13.0153 16.9392 14.3067V19.4448H20.1395V13.9373C20.1395 10.9871 18.5608 9.61415 16.4551 9.61415C14.7287 9.61415 13.9705 10.5767 13.5492 11.2322H13.5705V9.83967H10.37C10.4118 10.7408 10.3698 19.4451 10.3698 19.4451L10.3699 19.4448Z"
            fill=""
          />
        </svg>
        <svg className="fill-black cursor-pointer transition-all duration-700 hover:fill-indigo-600" width="{25}" height="{25}" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M11.7184 4.52972C9.10169 4.82461 6.49417 6.96173 6.38654 10.0145C6.3189 11.8785 6.84317 13.2769 8.60048 13.6695C9.36306 12.3115 8.35449 12.012 8.19767 11.0296C7.55347 7.00364 12.7977 4.25812 15.5421 7.06882C17.4408 9.01505 16.1909 15.0027 13.1283 14.3804C10.1948 13.7859 14.5643 9.01971 12.2227 8.08384C10.3194 7.32335 9.30771 10.4103 10.2102 11.9437C9.68131 14.5806 8.54206 17.0654 9.00329 20.3727C10.4992 19.277 11.0035 17.1787 11.4171 14.9903C12.1689 15.4513 12.5702 15.9308 13.5296 16.0053C17.0672 16.2816 19.0429 12.4404 18.5601 8.8971C18.1312 5.75582 15.0255 4.15724 11.7184 4.52972Z"
            fill=""
          />
        </svg>
      </div>
    </div>
    <div className="flex flex-col mt-28 ">
      <div className="flex items-center gap-6 mb-14">
        <h4 className="font-semibold text-2xl leading-9 text-black pl-5 border-l-2 border-solid border-indigo-600 ">
          Popular Feeds
        </h4>
      </div>
      <div className="flex   flex-col gap-10 max-md:mb-10">
        <div className="flex items-center  gap-4">
          <img src="/img/etc/feed1.png" alt="Blog tailwind page" className="w-12 h-12 object-cover" />
          <p className="font-medium text-base leading-7 text-gray-900 ">
            Financial News Outlets
          </p>
        </div>
        <div className="flex items-center gap-4">
          <img src="/img/etc/feed2.png" alt="Blog tailwind page" className="w-12 h-12 object-cover" />
          <p className="font-medium text-base leading-7 text-gray-900 ">
            Business Publications
          </p>
        </div>
        <div className="flex items-center  gap-4">
          <img src="/img/etc/feed3.png" alt="Blog tailwind page" className="w-12 h-12 object-cover" />
          <p className="font-medium text-base leading-7 text-gray-900 ">
            Online Lending Platforms' Blogs
          </p>
        </div>
      </div>
    </div>
   </>
	)
}
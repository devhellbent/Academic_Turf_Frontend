import React from "react";

function Certificate() {
  return (
    <div>
      {" "}
      <div class="" data-v0-t="card">
        <div class="grid grid-cols-1  gap-4  ">
          <div class="bg-gray-200 rounded-lg overflow-hidden shadow">
            <div class="p-2 md:p-3 lg:px-4">
              <div class="flex items-center justify-between mb-3">
                <h3 class="text-xl font-semibold">Certified Web Developer</h3>
                <div className="flex gap-2 items-center ">
                  <div
                    class="border bg-green-200 shadow font-bold text-xs items-center h-6 p-1 px-2 rounded mt-4 "
                    // data-v0-t="badge"
                  >
                    <div className="mb-3">Issued</div>
                  </div>
                  <button class="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50  bg-white shadow hover:bg-gray-300 hover:text-accent-foreground h-7 rounded px-3 mt-4">
                    View
                  </button>
                </div>
              </div>
              <div className="flex  justify-between ">
                <div class="text-sm text-gray-500 font-bold mb-2">
                  Issued by: Acme Web Academy
                </div>
                <div class=" text-sm text-gray-500 font-bold">
                  Issued on: June 15, 2023
                </div>
              </div>
            </div>
          </div>
          <div class="bg-gray-200 rounded-lg overflow-hidden shadow">
            <div class="p-2 md:p-3 lg:px-4">
              <div class="flex items-center justify-between mb-3">
                <h3 class="text-xl font-semibold">Certified Web Developer</h3>
                <div className="flex gap-2 items-center ">
                  <div
                    class="border bg-green-200 shadow font-bold text-xs items-center h-6 p-1 px-2 rounded mt-4 "
                    // data-v0-t="badge"
                  >
                    <div className="mb-3">Issued</div>
                  </div>
                  <button class="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50  bg-white shadow hover:bg-gray-300 hover:text-accent-foreground h-7 rounded px-3 mt-4">
                    View
                  </button>
                </div>
              </div>
              <div className="flex  justify-between ">
                <div class="text-sm text-gray-500 font-bold mb-2">
                  Issued by: Acme Web Academy
                </div>
                <div class=" text-sm text-gray-500 font-bold">
                  Issued on: June 15, 2023
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Certificate;

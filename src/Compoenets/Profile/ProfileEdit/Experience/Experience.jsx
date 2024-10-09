import React from "react";

function Experience() {
  return (
    <div>
      <section class="w-full">
        <div class="">
          <div class="grid gap-8">
            <div class="grid gap-6">
              <div
                class="rounded-lg border bg-gray-200  text-card-foreground shadow flex flex-row items-center gap-6 p-3"
                data-v0-t="card"
              >
                <div class="flex-1 grid gap-2">
                  <div class="flex items-center justify-between">
                    <div class="space-y-1">
                      <h3 class="text-xl font-bold">Software Engineer</h3>
                      <p class="text-muted-foreground">Acme Inc</p>
                    </div>
                    <div class="text-sm text-muted-foreground">
                      Jan 2021 - Present
                    </div>
                  </div>
                  <p class="text-muted-foreground">
                    Responsible for building and maintaining the company's web
                    application, collaborating with cross-functional teams.
                  </p>
                  <div class="flex gap-2 justify-end">
                    <button class="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50  border-input bg-white hover:bg-gray-300 shadow  h-8 rounded-md px-5">
                      View
                    </button>
                    <button class="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50  border-input bg-white hover:bg-gray-300 shadow hover:text-accent-foreground h-8 rounded-md px-5">
                      Edit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Experience;

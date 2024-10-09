import React from "react";

function EditProfile() {
  return (
    <div>
      <div class="flex flex-col min-h-screen bg-gray-100 mt-[60px] text-foreground">
        <main class="flex-1 py-8 sm:py-12">
          <div class="container mx-auto max-w-3xl px-4 sm:px-6">
            <div class="grid gap-8">
              <div
                class="rounded-lg border bg-white shadow text-card-foreground "
                data-v0-t="card"
              >
                <div class="flex flex-col space-y-1.5 p-6">
                  <h3 class="whitespace-nowrap text-2xl font-semibold leading-none tracking-tight">
                    Profile
                  </h3>
                  <p class="text-sm text-muted-foreground">
                    Update your profile information.
                  </p>
                </div>
                <div class="p-6 grid gap-6">
                  <div class="grid gap-2">
                    <label
                      class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      for="name"
                    >
                      Name
                    </label>
                    <input
                      class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      id="name"
                      value="John Doe"
                    />
                  </div>
                  <div class="grid gap-2">
                    <label
                      class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      for="email"
                    >
                      Email
                    </label>
                    <input
                      class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      id="email"
                      type="email"
                      value="john@example.com"
                    />
                  </div>
                  <div class="grid gap-2">
                    <label
                      class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      for="profile-picture"
                    >
                      Profile Picture
                    </label>
                    <div class="flex items-center gap-4">
                      <span class="relative flex shrink-0 overflow-hidden rounded-full h-16 w-16">
                        <img
                          class="aspect-square h-full w-full"
                          alt="@shadcn"
                          src="https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?t=st=1727763930~exp=1727767530~hmac=ab89d95523cfe749e2105faa4ca310f4a1b012877aec9197fbd9b40d9f235180&w=826"
                        />
                      </span>
                      <button class="inline-flex items-center hover:bg-gray-200 justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2">
                        Change
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="rounded-lg border bg-white text-gray-600 shadow"
                data-v0-t="card"
              >
                <div class="flex flex-col space-y-1.5 p-6">
                  <h3 class="whitespace-nowrap text-2xl font-semibold leading-none tracking-tight">
                    Contact
                  </h3>
                  <p class="text-sm ">
                    Update your contact information.
                  </p>
                </div>
                <div class="p-6 grid gap-6">
                  <div class="grid gap-2">
                    <label
                      class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      for="location"
                    >
                      Location
                    </label>
                    <input
                      class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      id="location"
                      value="San Francisco, CA"
                    />
                  </div>
                  <div class="grid gap-2">
                    <label
                      class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      for="phone"
                    >
                      Phone
                    </label>
                    <input
                      class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      id="phone"
                      value="+1 (555) 123-4567"
                    />
                  </div>
                </div>
              </div>
              <div
                class="rounded-lg border text-card-foreground shadow bg-white"
                data-v0-t="card"
              >
                <div class="flex flex-col space-y-1.5 p-6">
                  <h3 class="whitespace-nowrap text-2xl font-semibold leading-none tracking-tight">
                    Activity
                  </h3>
                  <p class="text-sm text-muted-foreground">
                    Update your activity information.
                  </p>
                </div>
                <div class="p-6 grid gap-6">
                  <div class="grid gap-2">
                    <label
                      class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      for="posts"
                    >
                      Posts
                    </label>
                    <input
                      class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      id="posts"
                      type="text"
                    />
                  </div>
                  <div class="grid gap-2">
                    <label
                      class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      for="experience"
                    >
                      Experience (years)
                    </label>
                    <input
                      class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      id="experience"
                      type="number"
                      value="5"
                    />
                  </div>
                </div>
              </div>
              <div className="flex justify-end items-center gap-3">
                <button className=" p-2 px-4 hover:bg-gray-200  rounded-md bg-white shadow ">Cancel</button>
                <button className=" p-2 px-4 hover:bg-gray-800  rounded-md bg-black text-white font-semibold shadow ">Save Changes</button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default EditProfile;

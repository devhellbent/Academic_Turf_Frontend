import React from "react";
import { useNavigate } from "react-router-dom";

function Wallet() {
  const navigate = useNavigate();
  return (
    <div className="mt-[65px] bg-gray-200">
      <div className="flex flex-col min-h-screen bg-background">
        <header className="bg-white border-b py-4 px-6">
          <div className="container mx-auto flex items-center justify-between">
            <h1 className="text-2xl font-bold">Coin Wallet</h1>
            <div className="lg:block hidden">
              <div className="flex  items-center gap-4">
                <div onClick={() => navigate('/buy-coins')} className="inline-flex h-9 items-center hover:bg-gray-800 cursor-pointer justify-center rounded-md bg-black px-4 text-sm font-medium text-white shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50">
                  Buy 10 Coins
                </div>
                <div className="text-sm text-center hover:bg-gray-300 font-medium bg-gray-200 cursor-pointer p-2 h-9 rounded ">
                  View All Buying Options
                </div>
              </div>
            </div>
          </div>
        </header>
        <main className="flex-1 container mx-auto py-3 px-2 lg:py-8 lg:px-6 grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-8">
          <div>
            <div className="bg-white shadow rounded-lg border border-muted p-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold">Total Coins</h2>
                <div className="text-4xl font-bold">1,234</div>
              </div>
              <div className="lg:flex grid mt-4 items-center gap-4">
                <div onClick={() => navigate('/buy-coins')} className="inline-flex h-9 items-center hover:bg-gray-800 cursor-pointer justify-center rounded-md bg-black px-4 text-sm font-medium text-white shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50">
                  Buy 10 Coins
                </div>
                <div className="text-sm text-center hover:bg-gray-300 font-medium bg-gray-200 cursor-pointer p-2 h-9 rounded ">
                  View All Buying Options
                </div>
              </div>
            </div>
            <div className="bg-white shadow rounded-lg border border-muted p-6 mt-6">
              <h2 className="text-2xl font-bold mb-4">Transaction History</h2>
              <div className="relative w-full overflow-auto">
                <table className="w-full caption-bottom text-sm">
                  <thead className="[&amp;_tr]:border-b">
                    <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                      <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                        Date
                      </th>
                      <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                        Amount
                      </th>
                      <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                        Type
                      </th>
                    </tr>
                  </thead>
                  <tbody className="[&amp;_tr:last-child]:border-0">
                    <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                      <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                        2023-04-15
                      </td>
                      <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                        +50
                      </td>
                      <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                        <div
                          className="inline-flex w-fit items-center whitespace-nowrap rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80"
                          data-v0-t="badge"
                        >
                          Buy
                        </div>
                      </td>
                    </tr>
                    <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                      <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                        2023-03-30
                      </td>
                      <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                        -20
                      </td>
                      <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                        <div
                          className="inline-flex w-fit items-center whitespace-nowrap rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground"
                          data-v0-t="badge"
                        >
                          Buy
                        </div>
                      </td>
                    </tr>
                    <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                      <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                        2023-03-01
                      </td>
                      <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                        +100
                      </td>
                      <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                        <div
                          className="inline-flex w-fit items-center whitespace-nowrap rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80"
                          data-v0-t="badge"
                        >
                          Buy
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <div className="bg-white shadow rounded-lg border border-muted p-6">
              <h2 className="text-2xl font-bold mb-4">Coin Prices</h2>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-sm text-muted-foreground">10 Coins</div>
                  <div className="text-2xl font-bold">₹50</div>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">30 Coins</div>
                  <div className="text-2xl font-bold">₹100</div>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">50 Coins</div>
                  <div className="text-2xl font-bold">₹150</div>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">100 Coins</div>
                  <div className="text-2xl font-bold">₹200</div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg border border-muted p-6">
              <h2 className="text-2xl font-bold mb-4">Account Information</h2>
              <div className="grid gap-4">
                <div>
                  <div className="text-sm text-muted-foreground">Username</div>
                  <div className="text-lg font-bold">johndoe</div>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Email</div>
                  <div className="text-lg font-bold">johndoe@example.com</div>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">
                    Wallet Address
                  </div>
                  <div className="text-lg font-bold">0x1234567890abcdef</div>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Joined</div>
                  <div className="text-lg font-bold">2023-01-01</div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Wallet;

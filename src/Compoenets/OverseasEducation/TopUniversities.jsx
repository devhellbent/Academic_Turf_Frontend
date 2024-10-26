import React from "react";

function TopUniversities() {
  const universities = [
    {
      rank: 2,
      name: "Imperial College London",
      location: "London, UK",
      overallScore: 98.5,
      employerReputation: 99.5,
      employmentOutcomes: 93.4,
    },
    {
      rank: 3,
      name: "University of Oxford",
      location: "Oxford, UK",
      overallScore: 96.6,
      employerReputation: 100,
      employmentOutcomes: 100,
    },
    {
      rank: 5,
      name: "University of Cambridge",
      location: "Cambridge, UK",
      overallScore: 96.7,
      employerReputation: 100,
      employmentOutcomes: 100,
    },
    {
      rank: 9,
      name: "UCL (University College London)",
      location: "London, UK",
      overallScore: 91.6,
      employerReputation: 98.3,
      employmentOutcomes: 70.3,
    },
    {
      rank: 27,
      name: "The University of Edinburgh",
      location: "Edinburgh, UK",
      overallScore: 83.3,
      employerReputation: 97.2,
      employmentOutcomes: 55.9,
    },
    {
      rank: 34,
      name: "The University of Manchester",
      location: "Manchester, UK",
      overallScore: 82,
      employerReputation: 98.1,
      employmentOutcomes: 87.6,
    },
    {
      rank: 40,
      name: "King's College London",
      location: "London, UK",
      overallScore: 80.2,
      employerReputation: 85.7,
      employmentOutcomes: 59.8,
    },
    {
      rank: 50,
      name: "The London School of Economics and Political Science (LSE)",
      location: "London, UK",
      overallScore: 76,
      employerReputation: 97,
      employmentOutcomes: 99.6,
    },
    {
      rank: 54,
      name: "University of Bristol",
      location: "Bristol, UK",
      overallScore: 75.1,
      employerReputation: 82.5,
      employmentOutcomes: 51.2,
    },
    {
      rank: 69,
      name: "The University of Warwick",
      location: "Coventry, UK",
      overallScore: 68.2,
      employerReputation: 86.4,
      employmentOutcomes: 65.7,
    },
  ];

  const usuniversities = [
    {
      rank: 1,
      name: "Massachusetts Institute of Technology (MIT)",
      location: "Cambridge, US",
      overallScore: 100,
      employerReputation: 100,
      employmentOutcomes: 100,
    },
    {
      rank: 4,
      name: "Harvard University",
      location: "Cambridge, US",
      overallScore: 96.8,
      employerReputation: 100,
      employmentOutcomes: 100,
    },
    {
      rank: 6,
      name: "Stanford University",
      location: "Stanford, US",
      overallScore: 96.1,
      employerReputation: 100,
      employmentOutcomes: 100,
    },
    {
      rank: 10,
      name: "California Institute of Technology (Caltech)",
      location: "Pasadena, US",
      overallScore: 90.9,
      employerReputation: 95.3,
      employmentOutcomes: 31,
    },
    {
      rank: 11,
      name: "University of Pennsylvania",
      location: "Philadelphia, US",
      overallScore: 90.3,
      employerReputation: 91.9,
      employmentOutcomes: 100,
    },
    {
      rank: 12,
      name: "University of California, Berkeley (UCB)",
      location: "Berkeley, US",
      overallScore: 90.1,
      employerReputation: 100,
      employmentOutcomes: 98.4,
    },
    {
      rank: 16,
      name: "Cornell University",
      location: "Ithaca, US",
      overallScore: 87.9,
      employerReputation: 93.1,
      employmentOutcomes: 97.1,
    },
    {
      rank: 21,
      name: "University of Chicago",
      location: "Chicago, US",
      overallScore: 86.2,
      employerReputation: 96.4,
      employmentOutcomes: 99.1,
    },
    {
      rank: 22,
      name: "Princeton University",
      location: "Princeton, US",
      overallScore: 85.5,
      employerReputation: 98.3,
      employmentOutcomes: 95.7,
    },
    {
      rank: 23,
      name: "Yale University",
      location: "New Haven, US",
      overallScore: 85.2,
      employerReputation: 99.9,
      employmentOutcomes: 98.5,
    },
  ];
  const CanadaAuniversities = [
    {
      rank: 25,
      name: "University of Toronto",
      location: "Toronto, Canada",
      overallScore: 84.1,
      employerReputation: 96.9,
      employmentOutcomes: 98.7,
    },
    {
      rank: 29,
      name: "McGill University",
      location: "Montreal, Canada",
      overallScore: 83,
      employerReputation: 87.6,
      employmentOutcomes: 98.3,
    },
    {
      rank: 38,
      name: "University of British Columbia",
      location: "Vancouver, Canada",
      overallScore: 81,
      employerReputation: 94.3,
      employmentOutcomes: 74.6,
    },
    {
      rank: 96,
      name: "University of Alberta",
      location: "Edmonton, Canada",
      overallScore: 61.2,
      employerReputation: 42.2,
      employmentOutcomes: 70,
    },
    {
      rank: 115,
      name: "University of Waterloo",
      location: "Canada",
      overallScore: 57.2,
      employerReputation: 64.2,
      employmentOutcomes: 58.9,
    },
    {
      rank: 120,
      name: "Western University",
      location: "London, Canada",
      overallScore: 55.8,
      employerReputation: 38.9,
      employmentOutcomes: 96.7,
    },
    {
      rank: 159,
      name: "Université de Montréal",
      location: "Montreal, Canada",
      overallScore: 51.3,
      employerReputation: 32.8,
      employmentOutcomes: 54.2,
    },
    {
      rank: 176,
      name: "McMaster University",
      location: "Hamilton, Canada",
      overallScore: 49,
      employerReputation: 34.2,
      employmentOutcomes: 49.9,
    },
    {
      rank: 189,
      name: "University of Ottawa",
      location: "Ottawa, Canada",
      overallScore: 47.3,
      employerReputation: 23.3,
      employmentOutcomes: 39.8,
    },
    {
      rank: 193,
      name: "Queen’s University at Kingston",
      location: "Kingston, Canada",
      overallScore: 46.8,
      employerReputation: 56.7,
      employmentOutcomes: 87.1,
    },
  ];
  const Austreuniversities = [
    {
      rank: 13,
      name: "The University of Melbourne",
      location: "Parkville, Australia",
      overallScore: 88.9,
      employerReputation: 93.9,
      employmentOutcomes: 96.5,
    },
    {
      rank: 18,
      name: "The University of Sydney",
      location: "Sydney, Australia",
      overallScore: 87.3,
      employerReputation: 90,
      employmentOutcomes: 93.1,
    },
    {
      rank: 19,
      name: "The University of New South Wales (UNSW)",
      location: "Sydney, Australia",
      overallScore: 87.1,
      employerReputation: 90.4,
      employmentOutcomes: 97.7,
    },
    {
      rank: 30,
      name: "Australian National University (ANU)",
      location: "Canberra, Australia",
      overallScore: 82.4,
      employerReputation: 75.4,
      employmentOutcomes: 56.6,
    },
    {
      rank: 37,
      name: "Monash University",
      location: "Melbourne, Australia",
      overallScore: 81.2,
      employerReputation: 79.6,
      employmentOutcomes: 79.4,
    },
    {
      rank: 40,
      name: "The University of Queensland",
      location: "Brisbane City, Australia",
      overallScore: 80.2,
      employerReputation: 74,
      employmentOutcomes: 56.7,
    },
    {
      rank: 77,
      name: "The University of Western Australia",
      location: "Perth, Australia",
      overallScore: 65.2,
      employerReputation: 41.8,
      employmentOutcomes: 78,
    },
    {
      rank: 82,
      name: "The University of Adelaide",
      location: "Adelaide, Australia",
      overallScore: 63.8,
      employerReputation: 38.9,
      employmentOutcomes: 51.5,
    },
    {
      rank: 88,
      name: "University of Technology Sydney",
      location: "Haymarket, Australia",
      overallScore: 62.4,
      employerReputation: 55,
      employmentOutcomes: 40.2,
    },
    {
      rank: 123,
      name: "RMIT University",
      location: "Melbourne, Australia",
      overallScore: 55.5,
      employerReputation: 48,
      employmentOutcomes: 38.4,
    },
  ];

  return (
    <div>
      <div className="min-h-screen bg-gray-200    lg:rounded-lg mt-10 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto ">
          <h1 className="text-4xl font-bold text-center text-black mb-10">
            Top 10 universities in UK according to (QS Rankings 2025)
          </h1>
          <div className="bg-white shadow-xl rounded-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-black text-white">
                    <th className="px-6 py-3 text-left text-xs text-white font-medium uppercase tracking-wider">
                      Rank
                    </th>
                    <th className="px-6 py-3 text-left text-xs text-white font-medium uppercase tracking-wider">
                      Name
                    </th>
                    <th className="px-6 py-3 text-left text-xs text-white font-medium uppercase tracking-wider">
                      Overall Score
                    </th>
                    <th className="px-6 py-3 text-left text-xs text-white font-medium uppercase tracking-wider">
                      Employer Reputation
                    </th>
                    <th className="px-6 py-3 text-left text-xs text-white font-medium uppercase tracking-wider">
                      Employment Outcomes
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {universities.map((university, index) => (
                    <tr
                      key={index}
                      className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
                    >
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-black">
                        {university.rank}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-black">
                          {university.name}
                        </div>
                        <div className="text-sm text-gray-500">
                          {university.location}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="text-sm font-medium text-black">
                            {university.overallScore}
                          </div>
                          {/* */}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-black">
                        {university.employerReputation}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-black">
                        {university.employmentOutcomes}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div className="min-h-screen bg-blue-100 lg:rounded-lg mt-10 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-center text-black mb-10">
            Top 10 universities in US according to (QS Rankings 2025)
          </h1>
          <div className="bg-white shadow-xl rounded-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-black text-white">
                    <th className="px-6 py-3 text-left text-xs text-white font-medium uppercase tracking-wider">
                      Rank
                    </th>
                    <th className="px-6 py-3 text-left text-xs text-white font-medium uppercase tracking-wider">
                      Name
                    </th>
                    <th className="px-6 py-3 text-left text-xs text-white font-medium uppercase tracking-wider">
                      Overall Score
                    </th>
                    <th className="px-6 py-3 text-left text-xs text-white font-medium uppercase tracking-wider">
                      Employer Reputation
                    </th>
                    <th className="px-6 py-3 text-left text-xs text-white font-medium uppercase tracking-wider">
                      Employment Outcomes
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {usuniversities.map((university, index) => (
                    <tr
                      key={index}
                      className={index % 2 === 0 ? "bg-blue-50" : "bg-white"}
                    >
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-black">
                        {university.rank}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-black">
                          {university.name}
                        </div>
                        <div className="text-sm text-gray-500">
                          {university.location}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="text-sm font-medium text-black">
                            {university.overallScore}
                          </div>
                          {/* */}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-black">
                        {university.employerReputation}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-black">
                        {university.employmentOutcomes}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div className="min-h-screen bg-purple-100 rounded-lg mt-10 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-center text-black mb-10">
            Top 10 universities in Canada according to (QS Rankings 2025)
          </h1>
          <div className="bg-white shadow-xl rounded-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-black text-white">
                    <th className="px-6 py-3 text-left text-xs text-white font-medium uppercase tracking-wider">
                      Rank
                    </th>
                    <th className="px-6 py-3 text-left text-xs text-white font-medium uppercase tracking-wider">
                      Name
                    </th>
                    <th className="px-6 py-3 text-left text-xs text-white font-medium uppercase tracking-wider">
                      Overall Score
                    </th>
                    <th className="px-6 py-3 text-left text-xs text-white font-medium uppercase tracking-wider">
                      Employer Reputation
                    </th>
                    <th className="px-6 py-3 text-left text-xs text-white font-medium uppercase tracking-wider">
                      Employment Outcomes
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {CanadaAuniversities.map((university, index) => (
                    <tr
                      key={index}
                      className={index % 2 === 0 ? "bg-purple-50" : "bg-white"}
                    >
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-black">
                        {university.rank}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-black">
                          {university.name}
                        </div>
                        <div className="text-sm text-gray-500">
                          {university.location}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="text-sm font-medium text-black">
                            {university.overallScore}
                          </div>
                          {/* */}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-black">
                        {university.employerReputation}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-black">
                        {university.employmentOutcomes}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div className="min-h-screen bg-green-100 rounded-lg mt-10 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-center text-black mb-10">
            Top 10 universities in Australia according to (QS Rankings 2025)
          </h1>
          <div className="bg-white shadow-xl rounded-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-black text-white">
                    <th className="px-6 py-3 text-left text-xs text-white font-medium uppercase tracking-wider">
                      Rank
                    </th>
                    <th className="px-6 py-3 text-left text-xs text-white font-medium uppercase tracking-wider">
                      Name
                    </th>
                    <th className="px-6 py-3 text-left text-xs text-white font-medium uppercase tracking-wider">
                      Overall Score
                    </th>
                    <th className="px-6 py-3 text-left text-xs text-white font-medium uppercase tracking-wider">
                      Employer Reputation
                    </th>
                    <th className="px-6 py-3 text-left text-xs text-white font-medium uppercase tracking-wider">
                      Employment Outcomes
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {Austreuniversities.map((university, index) => (
                    <tr
                      key={index}
                      className={index % 2 === 0 ? "bg-green-50" : "bg-white"}
                    >
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-black">
                        {university.rank}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-black">
                          {university.name}
                        </div>
                        <div className="text-sm text-gray-500">
                          {university.location}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="text-sm font-medium text-black">
                            {university.overallScore}
                          </div>
                          {/* */}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-black">
                        {university.employerReputation}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-black">
                        {university.employmentOutcomes}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopUniversities;

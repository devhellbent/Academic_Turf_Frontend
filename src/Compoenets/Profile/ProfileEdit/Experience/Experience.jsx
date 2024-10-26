import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

function Experience() {
  const userData = JSON.parse(localStorage.getItem("userData")) || {};
  const userId = userData.userid;
  const [experience, setExperience] = useState([]);

  const fetchExperience = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/experience/user/${userId}`
      );
      setExperience(response.data || []);
    } catch (err) {
      toast.error("Error fetching Experience");
    }
  };

  useEffect(() => {
    if (userId) {
      fetchExperience();
    }
  }, [userId]);

  return (
    <div>
      <section className="w-full">
        <div className="grid gap-8">
          {experience.length > 0 ? (
            experience.map((exp) => (
              <div
                key={exp.id}
                className="rounded-lg border bg-gray-200 text-card-foreground shadow flex flex-col gap-6 p-4"
                data-v0-t="card"
              >
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <h3 className="text-xl font-bold">{exp.jobtitle}</h3>
                    <p className="text-gray-500 font-bold ">{exp.company}</p>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {exp.startDate} - {exp.endDate}
                  </div>
                </div>
                <p className="text-muted-foreground">{exp.description}</p>
              </div>
            ))
          ) : (
            <p>No experiences found.</p>
          )}
        </div>
      </section>
    </div>
  );
}

export default Experience;

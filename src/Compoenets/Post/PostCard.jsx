import React from "react";

function Card({
  title,
  location,
  rate,
  distance,
  gender,
  description,
  deadline,
}) {
  return (
    <div className="rounded-lg border text-card-foreground bg-white shadow-sm hover:shadow-lg transition-shadow duration-300">
      <div className="grid gap-4 p-6">
        <div className="flex items-start justify-between">
          <div className="space-y-1">
            <h3 className="text-lg font-semibold">{title}</h3>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              {/* <LocationIcon /> */}
              <span>{location}</span>
            </div>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            {/* <ClockIcon /> */}
            <span className="bg-primary px-2 py-1 rounded-md text-primary-foreground font-medium">
              {rate}
            </span>
          </div>
        </div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          {/* <DistanceIcon /> */}
          <span className="bg-primary px-2 py-1 rounded-md text-primary-foreground font-medium">
            {distance}
          </span>
        </div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          {/* <GenderIcon /> */}
          <span className="bg-primary px-2 py-1 rounded-md text-primary-foreground font-medium">
            {gender}
          </span>
        </div>
        <p className="text-muted-foreground">{description}</p>
        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <span>Application Deadline: {deadline}</span>
          <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium bg-primary text-primary-foreground hover:bg-primary/90 h-9 rounded-md px-3">
            View
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;

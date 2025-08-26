import React from "react";
import Container from "./Container";

const BlogArticle = () => {
  return (
    <section className="w-full min-h-screen bg-white text-gray-700 pt-14 pb-10">
      <Container>
        <div className="w-full h-full flex flex-col lg:flex-row gap-4 ">
          {/* left */}
          <div className="flex-1 h-full pr-4">
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 border-b py-5 text-xs sm:text-sm md:text-base">
              <span className="">Author:</span>
              <span className="">Liam Wilson</span>
            </div>
            <div className="flex flex-col sm:flex-row  sm:items-center gap-4 border-b py-5 text-xs sm:text-sm md:text-base">
              <span className="">Blog Subject:</span>
              <span className="">Business, Strategy</span>
            </div>{" "}
            <div className="flex flex-col sm:flex-row  sm:items-center gap-4 border-b py-5 text-xs sm:text-sm md:text-base">
              <span className="">Date:</span>
              <span className="">27/08/2025</span>
            </div>
          </div>
          {/* right */}
          <div className="flex-1 h-full text-sm md:text-base">
            <div className="w-full h-full">
              <p className="">
                The sad reality is most engineering teams track too many things
                and trust too few of them. You don’t need another dashboard full
                of vanity data. You need a handful of precise software
                development KPIs that can expose friction, flag risk, and help
                your team ship better products.
              </p>
              <h2 className="text-gray-500">
                KPIs for Software Development You Should Monitor
              </h2>
              <h1 className="text-black text-center text-xl sm:text-2xl font-semibold">Cycle Time</h1>
              <h3 className="">
                What it tells you: How long it actually takes to get from
                “started” to “shipped.”
              </h3>
              <p className="py-2">
                Cycle time cuts through the illusion of busyness and answers one
                simple question: How fast do we ship value? The truth is, the
                longer your cycle time, the more delays you’re hiding: manual QA
                handoffs, unclear specs, endless code reviews. And these stack
                up, killing innovation.
              </p>
              <p className="py-2">
                In 2025, leading teams know how to shave cycle time down without
                compromising quality. Not to "go faster" for its own sake, but
                because short feedback loops protect against expensive mistakes
                and missed opportunities.
              </p>
              <h1 className="py-2 text-center text-xl sm:text-2xl font-semibold">Lead Time for Changes ‍</h1>
              <h3 className="py-2">
                What it tells you: How long code sits between commit and
                production.
              </h3>
              <p className="py-2">
                A fast PR doesn’t mean much if your CI/CD pipeline is a traffic
                jam. Lead time for changes is a KPI for software development
                that exposes the gap between code complete and value delivered.
                You should definitely monitor it as it’s a core DORA metric
                forcing teams to confront the real efficiency of their DevOps
                setup.
              </p>
              <p className="py-2">
                A simple way to quickly assess your performance? If your lead
                time is measured in days, not hours, you’re not truly agile,
                you’re just good at pretending.
              </p>
              <h1 className="py-1 text-center text-xl sm:text-2xl font-semibold">Deployment Frequency</h1>
              <p className="py-2">
                What it tells you: Whether you’re releasing often enough to stay
                competitive.
              </p>
              <p className="py-2">
                Of course it depends on your industry, but as a rule of thumb,
                you can assume that for most businesses, deploying monthly is a
                strong red flag. Why? Because we all live in a world where users
                expect constant improvement. That’s why high deployment
                frequency signals a healthy delivery culture. After all, small
                changes shipped often with low risk sound way better than big
                unsuccessful shifts that can actually irritate users and make
                them ditch your brand.
              </p>
              <p className="py-2">
                So, if your releases still feel like “big events” instead of
                routine steps, you have work to do.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default BlogArticle;

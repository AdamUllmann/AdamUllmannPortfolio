"use client";

import Image from "next/image";

export default function SkillsCarousel({
  skills,
  selectedSkill,
  setSelectedSkill
}: {
  skills: {
    name: string;
    image: string;
    description: string;
  }[];
  selectedSkill: any;
  setSelectedSkill: (skill: any) => void;
}) {
  return (
    <section className="py-12 flex flex-col items-center" id="skills">
      <div
        className="bg-neutral-30 rounded-3xl pt-10 pb-14 relative w-full max-w-5xl overflow-hidden shadow-lg"
        style={{
          background: 'rgba(0, 0, 0, 0.1)',
          backdropFilter: 'blur(15px)',
          WebkitBackdropFilter: 'blur(15px)',
        }}
      >
        <h2 className="text-center text-white mb-8 font-heading text-4xl font-bold">
          Technology Stack
        </h2>

        <div className="relative">
          {/* Top marquee row */}
          <div className="overflow-hidden">
            <div className="flex whitespace-nowrap marquee-container">
              <div className="flex marquee gap-5">
                {[...skills, ...skills].map((skill, index) => (
                  <div key={`top-${index}`} className="flex-shrink-0">
                    <div
                      onClick={() => setSelectedSkill(skill)}
                      className="w-[130px] p-6 rounded-xl inline-flex flex-col items-center cursor-pointer hover:scale-105 transition-transform"
                    >
                      <Image
                        width={56}
                        height={56}
                        src={skill.image}
                        alt={skill.name}
                      />
                      <p className="text-white text-base lg:text-lg mt-2 truncate text-neutral-10">
                        {skill.name}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom marquee row */}
          <div className="overflow-hidden mt-5">
            <div className="flex whitespace-nowrap marquee-container">
              <div className="flex marquee-reverse gap-5">
                {[...skills, ...skills].map((skill, index) => (
                  <div key={`bottom-${index}`} className="flex-shrink-0">
                    <div
                      onClick={() => setSelectedSkill(skill)}
                      className="w-[130px] bg-neutral-20 p-6 rounded-xl inline-flex flex-col items-center cursor-pointer hover:scale-105 transition-transform"
                    >
                      <Image
                        width={56}
                        height={56}
                        src={skill.image}
                        alt={skill.name}
                      />
                      <p className="text-white text-base lg:text-lg mt-2 truncate text-neutral-10">
                        {skill.name}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Modal for Skill Details */}
        {selectedSkill && (
          <div
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
            onClick={() => setSelectedSkill(null)}
          >
            <div
              className="rounded-xl p-6 max-w-md w-full shadow-lg"
              style={{
                background: 'rgba(0, 0, 0, 0.7)',
                backdropFilter: 'blur(15px)',
                textAlign: 'center',
              }}
              onClick={e => e.stopPropagation()}
            >
              <h3 className="text-2xl font-bold text-white mb-4">
                {selectedSkill.name}
              </h3>
              <p className="text-white">{selectedSkill.description}</p>
              <button
                onClick={() => setSelectedSkill(null)}
                className="mt-4 px-4 py-2 bg-white text-black rounded hover:bg-gray-100"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

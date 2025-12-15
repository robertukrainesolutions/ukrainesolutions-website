import Image from 'next/image';

export const metadata = {
  title: 'Projects - Ukraine Solutions',
  description: 'View our current and past projects supporting Ukraine.',
};

const projects = [
  {
    title: 'ENERGY FOR THE VICTORY',
    image: '/uploads/2024/01/1-1024x646.webp',
  },
  {
    title: 'OUR VOLUNTEERS IN UKRAINE',
    image: '/uploads/2024/01/5-1024x646.webp',
  },
  {
    title: 'POWER BANKS',
    image: '/uploads/2024/01/6-1024x646.webp',
  },
  {
    title: 'Weatherproof Sleeping Bags',
    image: '/uploads/2024/01/8-1024x646.webp',
  },
  {
    title: 'Winter Camo',
    image: '/uploads/2024/01/9-1024x646.webp',
  },
  {
    title: 'SOLDIERS EYES',
    image: '/uploads/2024/01/10-1024x646.webp',
  },
  {
    title: 'WHEEL CHAIRS DELIVERED',
    image: '/uploads/2024/01/11-1024x646.webp',
  },
  {
    title: 'Practice Drone',
    image: '/uploads/2024/01/12-1024x646.webp',
  },
  {
    title: 'Additional Support',
    image: '/uploads/2024/01/13-1024x646.webp',
  },
];

export default function Projects() {
  return (
    <div className="min-h-screen py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-bold text-center mb-12 text-gray-900">
          Some current and past projects
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="relative aspect-video">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900">{project.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}


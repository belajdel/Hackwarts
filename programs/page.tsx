import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export default function Programs() {
  const programs = [
    { 
      id: 1, 
      name: 'Robotics 101', 
      description: 'Introduction to robotics for beginners. Learn about basic robot components, sensors, and simple programming.',
      duration: '8 weeks',
      level: 'Beginner',
      ageGroup: '8-12 years',
      maxStudents: 15,
      projects: ['Line-following robot', 'Obstacle-avoiding robot']
    },
    { 
      id: 2, 
      name: 'Advanced Coding', 
      description: 'Dive deep into programming concepts. Cover topics like algorithms, data structures, and object-oriented programming.',
      duration: '12 weeks',
      level: 'Advanced',
      ageGroup: '13-16 years',
      maxStudents: 12,
      projects: ['Game development', 'Web application']
    },
    { 
      id: 3, 
      name: 'Electronics Workshop', 
      description: 'Hands-on electronics projects. Learn about circuits, components, and create your own electronic devices.',
      duration: '6 weeks',
      level: 'Intermediate',
      ageGroup: '10-14 years',
      maxStudents: 10,
      projects: ['LED cube', 'Digital clock']
    },
    { 
      id: 4, 
      name: 'Aerospace Engineering', 
      description: 'Explore the basics of aerospace engineering. Learn about aerodynamics, propulsion, and space technology.',
      duration: '10 weeks',
      level: 'Intermediate',
      ageGroup: '12-16 years',
      maxStudents: 12,
      projects: ['Model rocket', 'Wind tunnel experiment']
    },
  ]

  return (
    <div className="container mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-4xl font-light">Educational Programs</h1>
        <Button className="btn-rounded"><i className="fas fa-plus mr-2"></i> Add Program</Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {programs.map((program) => (
          <Card key={program.id} className="overflow-hidden">
            <CardHeader className="bg-primary text-primary-foreground">
              <CardTitle >{program.name}</CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <p className="text-muted-foreground mb-4">{program.description}</p>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <h3 className="font-semibold mb-1">Duration</h3>
                  <p>{program.duration}</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Age Group</h3>
                  <p>{program.ageGroup}</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Max Students</h3>
                  <p>{program.maxStudents}</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Level</h3>
                  <Badge variant="secondary">{program.level}</Badge>
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Projects</h3>
                <ul className="list-disc list-inside">
                  {program.projects.map((project, index) => (
                    <li key={index}>{project}</li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}


'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Sticker } from 'lucide-react'

export default function StickerVisualization() {
  const [selectedStudent, setSelectedStudent] = useState('')

  const students = [
    { id: '1', name: 'Alice Johnson' },
    { id: '2', name: 'Bob Smith' },
    { id: '3', name: 'Charlie Brown' },
    { id: '4', name: 'Diana Lee' },
  ]

  const stickers = [
    { id: '1', name: 'Robot Builder', color: 'bg-blue-500' },
    { id: '2', name: 'Code Master', color: 'bg-green-500' },
    { id: '3', name: 'Circuit Wizard', color: 'bg-yellow-500' },
    { id: '4', name: 'Inventor Supreme', color: 'bg-purple-500' },
  ]

  const studentStickers = {
    '1': ['1', '2', '3'],
    '2': ['1', '4'],
    '3': ['2', '3'],
    '4': ['1', '2', '3', '4'],
  }

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-4xl font-bold mb-6">Sticker Visualization</h1>
      <Card className="mb-6">
        <CardContent className="pt-6">
          <label className="block text-sm font-medium mb-1">Select Student</label>
          <Select onValueChange={setSelectedStudent}>
            <SelectTrigger>
              <SelectValue placeholder="Select a student" />
            </SelectTrigger>
            <SelectContent>
              {students.map((student) => (
                <SelectItem key={student.id} value={student.id}>{student.name}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </CardContent>
      </Card>
      {selectedStudent && (
        <Card>
          <CardHeader>
            <CardTitle>Earned Stickers</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-4">
              {studentStickers[selectedStudent].map((stickerId) => {
                const sticker = stickers.find((s) => s.id === stickerId)
                return (
                  <div key={stickerId} className={`${sticker.color} rounded-full p-4 flex items-center justify-center`}>
                    <Sticker className="text-white" />
                  </div>
                )
              })}
            </div>
            <div className="mt-4">
              <h3 className="font-semibold">Sticker Legend:</h3>
              <ul className="list-disc list-inside">
                {stickers.map((sticker) => (
                  <li key={sticker.id} className="flex items-center mt-2">
                    <div className={`${sticker.color} rounded-full p-2 mr-2`}>
                      <Sticker className="text-white h-4 w-4" />
                    </div>
                    {sticker.name}
                  </li>
                ))}
              </ul>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}


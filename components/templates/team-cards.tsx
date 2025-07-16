'use client'

import * as React from 'react'
import Image from "next/image"
import { Card } from "@/components/molecules/shadcn/card"
import { motion } from "framer-motion"

interface TeamMember {
  name: string
  title: string
}

interface TeamCardsProps {
  members: TeamMember[]
}

const teamPicture = [
  "/teams/test_team.png",
  "/teams/test_team.png",
  "/teams/test_team.png"
]

export default function TeamCards({ members }: TeamCardsProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {members.map((member, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
        >
          <Card className="flex flex-col items-center text-center p-6 shadow-sm hover:shadow-md transition">
            <Image
              src={teamPicture[index]}
              alt={member.name}
              width={120}
              height={120}
              className="rounded-lg object-cover mb-4"
            />
            <h4 className="text-lg font-semibold">{member.name}</h4>
            <p className="text-sm text-muted-foreground">{member.title}</p>
          </Card>
        </motion.div>
      ))}
    </div>
  )
}

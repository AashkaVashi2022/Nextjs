// /prisma/screenplay.js
import prisma from './prisma'

// READ
export const getAllScreenplay = async () => {
  const screenplays = await prisma.screenplay.findMany({})
  return screenplay
}

export const getScreenplay = async id => {
  console.log("id", id, typeof id)
  const screenplay = await prisma.screenplay.findUnique({
    where: { id: parseInt(id), }
  })
  return screenplay
}

export const getUserScreenplay = async user_id => {
  const user_screenplay = await prisma.screenplay.findMany({
    where: { user_id },
  })
  return user_screenplay
}

// CREATE
export const createScreenplay = async (user_id, title, genre, tags, logline, synposis, profile_url, screenplay_url, ihf) => {
  const screenplay = await prisma.screenplay.create({
    data: {
        user_id,
        title,
        genre,
        tags,
        logline,
        synposis,
        profile_url,
        screenplay_url,
        ihf
    }
  })
  return screenplay
}

// UPDATE
export const updateScreenplay = async (id, updateData) => {
  const screenplay = await prisma.screenplay.update({
    where: {
      id
    },
    data: {
      ...updateData
    }
  })
  return screenplay
}

// DELETE
export const deleteUserScreenplay = async (id) => {
  const screenplay = await prisma.screenplay.delete({
    where: { id: parseInt(id), }
  })
  return screenplay
}
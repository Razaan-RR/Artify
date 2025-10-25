import { useState, useEffect } from 'react'

export default function useSkills() {
  const [skills, setSkills] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/SkillListings.json')
      .then((res) => res.json())
      .then((data) => setSkills(data))
      .catch((err) => console.error(err))
      .finally(() => setLoading(false))
  }, [])

  return { skills, loading }
}

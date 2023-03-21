// https://usehooks.com/useWidth/
import { useEffect, useState } from 'react'

const useWidth = () => {
  const [windowSize, setWindowSize] = useState<{ width?: number }>({
    width: undefined,
  })

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
      })
    }

    window.addEventListener('resize', handleResize)

    handleResize()

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return windowSize
}

export default useWidth

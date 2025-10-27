'use client'
import { usePostAxios } from "@/hooks/usePostAxios"
import { usePostSWR } from "@/hooks/usePostSWR"

export default function page() {

  const axiosData = usePostAxios()
  const swrData = usePostSWR()

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-6 flex flex-col items-center">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">
        Compare Axios VS useSWR (with caching)
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl">
        {/* Axios Section */}

        <div className="bg-white shadow rounded-2xl p-6 border border-gray-100">
          <h2 className="text-2xl font-semibold mb-2 text-blue-700">Axios (No Caching)</h2>
          <p className="text-sm text-gray-500 mb-4">Fetch dilakukan setiap render ulang tanpa cache</p>
          {axiosData.loading && <p>Loading data ... </p>}
          {axiosData.error && <p className="text-red-700">{axiosData.error}</p>}
          {!axiosData.loading && !axiosData.error && (
            <>
              <p className="text-gray-800">Processing time :
                <span className="font-semibold text-gray-800" >{axiosData.time.toFixed(2)} ms</span>
              </p>
              <ul className="space-y-3">
                {
                  axiosData.post.map((post) => {
                    return (
                      <li key={post.id} className="p-3 rounded-lg border border-gray-200 hover:bg-gray-50 transition">
                        <h3 className="font-semibold text-gray-800">{post.title}</h3>
                        <p className="text-gray-600">{post.body}</p>
                      </li>
                    )
                  })
                }
              </ul>
            </>
          )}
        </div>

        {/* SWR Section */}
        <div className="bg-white shadow rounded-2xl p-6 border border-gray-100">
          <h2 className="text-2xl font-semibold mb-2 text-green-700">useSWR (Caching)</h2>
          <p className="text-sm text-gray-500 mb-4">Fetch hanya pertama kali, lalu cache disimpan di memori SWR</p>
          {swrData.loading && <p>Loading data ... </p>}
          {swrData.error && <p className="text-red-700">{swrData.error}</p>}
          {!swrData.loading && !swrData.error && (
            <>
              <p className="text-gray-800">Processing time :
                <span className="font-semibold text-gray-800" >{swrData.time.toFixed(2)} ms</span>
              </p>
              <ul className="space-y-3">
                {
                  swrData.posts?.map((post) => {
                    return (
                      <li key={post.id} className="p-3 rounded-lg border border-gray-200 hover:bg-gray-50 transition">
                        <h3 className="font-semibold text-gray-800">{post.title}</h3>
                        <p className="text-gray-600">{post.body}</p>
                      </li>
                    )
                  })
                }
              </ul>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

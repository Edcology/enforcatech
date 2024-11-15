import robot from '../../assets/robot.png'

const Hero = () => {
  return (
    <div className="pt-20 bg-hero-pattern text-white px-2 md:px-16 min-h-screen grid justify-center">
        <div className='md:flex justify-center'>
            <img src={robot} alt="" className='h-100 w-150' />
        </div>
        <div className='backdrop-blur-sm absolute bottom-4 left-2 right-2 md:left-24 md:right-24 p-8 text-center grid justify-center'>
            <h1 className='font-medium text-3xl mb-2'>First <span className='text-blue-500 font-bold'>AI</span> job application and support platform.</h1>
            <div className='md:w-[560px] text-center'>
                <p className='text-lg mb-4'>Learn your dream job with personalized preparation and expert guidance aided with our AI-powered job processing platform</p>
            </div>
            <button className='bg-blu px-4 py-2 w-[150px] rounded-full mx-auto'>Start here</button>
        </div>
        
    </div>
  )
}

export default Hero
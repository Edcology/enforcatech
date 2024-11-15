import { RiRoadMapLine } from "react-icons/ri";
import { GrUserExpert } from "react-icons/gr";
import { TbUserQuestion } from "react-icons/tb";
import { BsPersonWorkspace } from "react-icons/bs";

const Offerings = () => {
  return (
    <div className="bg-blue-950 px-2 md:px-16 py-16">
        <h1 className="text-white text-3xl font-medium mb-4">We built our business on customer service</h1>
        <div className="grid md:grid-rows-2 md:grid-cols-2 gap-4">
            <div className="bg-white rounded-xl p-6">
                <RiRoadMapLine className="size-8" />
                <h2 className="text-xl font-medium">Get Career Roadmap</h2>
                <p>Upload your CV for review analysis and initial feedback on key skills and experience.</p>
            </div>
            <div className="bg-white rounded-xl p-6">
                <GrUserExpert className="size-8" />
                <h2 className="text-xl font-medium">Get real experience with expert guidance</h2>
                <p>We take you into the real world of how to do in your chosen career beyond the theory knowledge.</p>
            </div>
            <div className="bg-white rounded-xl p-6">
                <TbUserQuestion className="size-8" />
                <h2 className="text-xl font-medium">Simulated Interview Session</h2>
                <p>Practice answering both behavioral and technical interview questions in a safe and supportive environment.</p>
            </div>
            <div className="bg-white rounded-xl p-6">
                <BsPersonWorkspace className="size-8" />
                <h2 className="text-xl font-medium">Land the Job</h2>
                <p>Track your job applications and schedule interviews with ease using our automated and streamlined platform</p>
            </div>
            
        </div>
    </div>
  )
}

export default Offerings
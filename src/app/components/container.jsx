import Header from "@/app/components/header";
import SubmissionForm from "@/app/components/submission-form";

export default function Container(props) {

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
            <div className="container mx-auto px-4 py-8">
                <div className="max-w-md mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
                    <Header/>
                    <SubmissionForm/>
                </div>
            </div>
        </div>
    )
}

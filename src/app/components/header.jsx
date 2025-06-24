import {Ruler} from "lucide-react";

export default function Header() {
    return (
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-8 text-center">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                <Ruler className="w-8 h-8 text-blue-600"/>
            </div>
            <h1 className="text-2xl font-bold text-white mb-2">Height Tracker</h1>
            <p className="text-blue-100">Share your height and get personalized stats!</p>
        </div>
    )
}
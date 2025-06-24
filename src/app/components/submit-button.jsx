import {Send} from "lucide-react";

export default function SubmitButton() {
    const isFormValid = true;
    const status = 'idle';

    return (
        <button
            onClick={() => console.log('Button clicked')}
            type="submit"
            disabled={!isFormValid || status === 'loading'}
            className={`w-full py-3 px-4 rounded-lg font-medium transition-all duration-300 flex items-center justify-center space-x-2 ${
                isFormValid && status !== 'loading'
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transform hover:-translate-y-0.5'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
        >
            {status === 'loading' ? (
                <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    <span>Submitting...</span>
                </>
            ) : (
                <>
                    <Send className="w-5 h-5"/>
                    <span>Submit Height</span>
                </>
            )}
        </button>

    )
}
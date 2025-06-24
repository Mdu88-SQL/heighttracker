import {Mail} from "lucide-react";

export default function InputEmail({onChange,formData}) {
    return (
        <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                <Mail className="w-4 h-4 inline mr-2" />
                Email Address
            </label>
            <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={onChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                placeholder={"Enter your email address"}
                required
            />
        </div>
    )
}
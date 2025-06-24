import {User} from "lucide-react";

export default function InputName({onChange,formData}) {
    return (
        <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                <User className="w-4 h-4 inline mr-2" />
                Full Name
            </label>
            <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={onChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                placeholder={"Enter Your Full Name"}
                required
            />
        </div>
    )
}
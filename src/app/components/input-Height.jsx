import {Ruler} from "lucide-react";

export default function InputHeight({onChange,formData}) {
    return (
        <div>
            <label htmlFor="height" className="block text-sm font-medium text-gray-700 mb-2">
                <Ruler className="w-4 h-4 inline mr-2" />
                Height (cm)
            </label>
            <input
                type="number"
                id="height"
                name="height"
                value={formData.height}
                onChange={onChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                placeholder={"Enter your height in cm"}
                min="50"
                max="300"
                required
            />
        </div>

    )
}
import Info from '../../assets/info.png';
import UploadIM from '../../assets/upload.png';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Submited from '../../Components/login&register/Submited/Submited';

function Test() {
    const nav = useNavigate();
    const [upload, setUpload] = useState(false);
    const [file, setFile] = useState(null);
    const [error, setError] = useState('');
    const [submitting, setSubmitting] = useState(false);
    const [success, setSuccess] = useState(false);

    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        if (selectedFile) {
            if (selectedFile.size > 10 * 1024 * 1024) {
                setError('File size must be less than 10MB');
                setFile(null);
            } else {
                setError('');
                setFile(selectedFile);
            }
        }
    };

    const handleSubmit = async () => {
        if (!upload) {
            setUpload(true);
            setSuccess(false);
            setError('');
            setFile(null);
            return;
        }
        if (!file) {
            setError('Please upload a file before submitting.');
            return;
        }
        // setSubmitting(true);
        setError('');
        setSuccess(false);
        console.log(file);
        // Simulate API call
        setSubmitting(true)
          setTimeout(() => {
  console.log("This runs after 5 seconds!");
}, 5000);
    };
    useEffect(()=>{
        if(submitting){
        setTimeout(() => {
  console.log("This runs after 5 seconds!");
  nav('/profile')
}, 5000);}
    },[submitting])

    return (
        <div className="bg-[url(../src/assets/bg.jpg)] h-dvh bg-cover w-[100%] bg-no-repeat">
            <div className="flex justify-around h-screen items-center">
                {submitting? <Submited/>:
                <div
                    className="flex flex-col justify-center items-center w-[25%] h-auto
                        bg-gradient-to-r from-[#393939] to-[#111111] text-white
                        rounded-[2vw] max-md:w-[90%] max-md:rounded-[4vw]"
                >
                    <div
                        className="mx-[2vw] my-[3vw] flex flex-col justify-center items-center gap-y-[0.5vw]
                            max-md:mx-[5vw] max-md:my-[15vw]"
                    >
                        {upload && (
                            <h1 className="text-[2vw] text-center poppins-bold max-md:text-[7vw] max-md:mb-[2vw]">
                                Submit Your vedio
                            </h1>
                        )}
                        {upload && (
                            <button
                                className="invert max-md:w-[5vw]"
                                type="button"
                                onClick={() => setUpload(!upload)}
                            >
                                <img
                                    src="https://img.icons8.com/?size=100&id=26194&format=png&color=000000"
                                    alt=""
                                />
                            </button>
                        )}
                        <div className="flex justify-between items-center w-full">
                            <h1 className="text-[2vw] poppins-bold max-md:text-[7vw]">Upload Vedio</h1>
                            <img
                                className="w-[2vw] h-[2vw] max-md:w-[6vw] max-md:h-[6vw]"
                                src={Info}
                                alt=""
                            />
                        </div>
                        {/* test question */}
                        <p className="text-[0.9vw] text-white/50 w-3/3 max-md:text-[3.5vw]">
                            Submit a vedio of your in which you introduce yourself and tell about your experirnce and achivement
                        </p>
                        {upload && (
                            <div
                                className="flex justify-center cursor-pointer text-white/50 w-[100%]
                                    border-2 border-white/50 border-dashed py-[5vw] rounded-[1vw] 
                                    max-md:py-[20vw]"
                            >
                                <label
                                    className="text-[0.8vw] px-[0.5vw] text-center max-md:text-[3vw]"
                                    htmlFor="fileInput"
                                >
                                    <img
                                        className="w-[1vw] h-[1vw] inline-block opacity-50 max-md:w-[4vw] max-md:h-[4vw]"
                                        src={UploadIM}
                                        alt=""
                                    />
                                    {file ? file.name : 'Upload Sample'}
                                </label>
                                <input
                                    type="file"
                                    id="fileInput"
                                    className="hidden"
                                    accept=".pdf,.doc,.docx"
                                    onChange={handleFileChange}
                                />
                            </div>
                        )}
                        {upload && (
                            <label className="text-white/50 text-[0.56vw] text-center mb-[1vw] max-md:text-[2vw]">
                                Upload size must be less than 10MB
                            </label>
                        )}
                        {error && (
                            <div className="text-red-400 text-[0.8vw]">{error}</div>
                        )}
                        {success && (
                            <div className="text-green-400 text-[0.8vw]">
                                Upaloaded submitted successfully!
                            </div>
                        )}
                        <button
                            className="uppercase text-[1vw] bg-[#736ADB] w-full py-[1vw] mb-[1.5vw]
                                rounded-[0.5vw] disabled:opacity-50 max-md:py-[3vw] max-md:text-[4vw] max-md:rounded-[2vw] max-md:mt-[1vw]"
                            onClick={handleSubmit}
                            disabled={submitting}
                        >
                            {submitting
                                ? 'Submitting...'
                                : upload
                                ? 'Submit vedio'
                                : 'Upload vedio'}
                        </button>
                    </div>
                </div>}
            </div>
        </div>
    );
}

export default Test;
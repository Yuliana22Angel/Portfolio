import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (data, e) => {
    if (isSubmitting) return; // Evita envíos duplicados
    setIsSubmitting(true); // Establece el estado de envío a true
    
    e.target.reset();
    console.log("Message submitted: " + JSON.stringify(data));

    // code fragment
    var correo = {
      service_id: "mmmmmm",
      template_id: "mmmmmmmm",
      user_id: "mmmm",
      template_params: {
        'user_name': data.user_name,
        'user_email': data.user_email,
        'user_number': data.user_number,
        'user_text': data.user_text,
        'message': data.message
      }
    };

    fetch("mmmmmm", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(correo),
    })
      .then((response) => {
        if (response.ok) {
          toast.success("Message sent successfully!");
        } else {
          toast.error("Failed to send message. Please try again later.");
        }
      })
      .catch((error) => {
        console.error("Error sending message:", error);
        toast.error("An error occurred while sending the message. Please try again later.");
      })
      .finally(() => {
        setIsSubmitting(false); // Restablece el estado de envío a false
      });
  };


  return (
    <>
      <form className="contact_form" onSubmit={handleSubmit(onSubmit)}>
        <div className="input_list">
          <ul>
            <li>
              <input
                {...register("user_name", { required: true })}
                type="text"
                placeholder="Your Name"
              />
              {errors.user_name && errors.user_name.type === "required" && (
                <span className="invalid-feedback">Name is required</span>
              )}
            </li>
            {/* End li */}
            <li>
              <input
                {...register(
                  "user_email",
                  {
                    required: "Email is Required",
                    pattern: {
                      value: /\S+@\S+\.\S+/,
                      message: "Entered value does not match email format",
                    },
                  },
                  { required: true }
                )}
                type="email"
                placeholder="Your Email"
              />
              {errors.user_email && (
                <span className="invalid-feedback">{errors.user_email.message}</span>
              )}
            </li>
            {/* End li */}
            <li>
              <input
                type="number"
                placeholder="Your Phone"
                {...register("user_number", { required: true })}
              />
              {errors.user_number && (
                <span className="invalid-feedback">Phone is required.</span>
              )}
            </li>
            {/* End li */}
            <li>
              <input
                type="text"
                placeholder="Subject"
                {...register("user_text", { required: true })}
              />
              {errors.user_text && (
                <span className="invalid-feedback">Subject is required.</span>
              )}
            </li>
            {/* End li */}
          </ul>
        </div>
        {/* End input-list */}

        <div className="message_area">
          <textarea
            {...register("message", { required: true })}
            placeholder="Your message here"
          ></textarea>
          {errors.message && (
            <span className="invalid-feedback">Message is required.</span>
          )}
        </div>
        {/* End message area */}

        <div className="know_tm_button">
          <button type="submit">Submit Now</button>
        </div>
        {/* End tokyo_tm_button */}
      </form>
      <ToastContainer />
      {/* End contact */}
    </>
  );
};

export default Contact;

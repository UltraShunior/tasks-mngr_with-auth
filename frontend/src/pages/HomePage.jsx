import { useAuth } from "../context/AuthContext";
import { Card } from "../components/ui";

function HomePage() {
  const data = useAuth();

  return (
    <div>
      <Card>
        <h1 className="text-2xl font-bold my-4">
          Welcome to TaskMaster: Your Ultimate Task Management Solution
        </h1>
        <p>
          Are you tired of feeling overwhelmed by your to-do list? Do you
          struggle to keep track of your tasks and projects? Look no further!
          TaskMaster is here to revolutionize the way you manage your tasks and
          boost your productivity.
        </p>
        <h2 className="text-xl font-bold my-4">
          What Can You Do on TaskMaster?
        </h2>
        <p>
          <b className="block mt-3">1. Task Organization </b>
          TaskMaster allows you to create, organize, and prioritize tasks
          effortlessly. Whether it's personal errands, work projects, or
          long-term goals, you can easily categorize and sort them to stay on
          top of your responsibilities.
        </p>
        <p>
          <b className="block mt-3">2. Deadline Management </b>
          Never miss a deadline again! TaskMaster lets you set due dates and reminders for your tasks, ensuring that you stay on track and meet your commitments.
        </p>
        <p>
          <b className="block mt-3">3. Collaboration</b>
          Collaboration is key to success. With TaskMaster, you can invite team members, family, or friends to collaborate on tasks and projects. Assign responsibilities, share files, and communicate seamlessly within the platform.
        </p>
        <p>
          <b className="block mt-3">4. Progress Tracking</b>
          Monitor your progress with ease. TaskMaster provides insightful progress tracking tools, allowing you to visualize your accomplishments, identify bottlenecks, and make informed decisions.
        </p>
        <p>
          <b className="block mt-3">5. Calendar Integration</b>
          Synchronize your tasks with your calendar to have a comprehensive overview of your schedule. Never double-book yourself or forget important appointments again.
        </p>
        <p>
          <b className="block mt-3">6. Priority Management</b>
          Not all tasks are created equal. TaskMaster lets you assign priorities to tasks, helping you focus on what matters most and ensuring that urgent matters are addressed promptly.
        </p>
        <p>
        </p>
        <p>
          <b className="block mt-3">7. Access Anywhere</b>
          Access your tasks from anywhere, anytime. TaskMaster is available on desktop and mobile, so you can stay organized whether you're at home, in the office, or on the go.
        </p>
        <p>
          <b className="block mt-3">8. Data Security</b>
          Your data is important, and we take its security seriously. TaskMaster employs state-of-the-art encryption and security measures to safeguard your information.
        </p>
        <p className="mt-4">
        Are you ready to take control of your tasks and conquer your goals? Sign up for TaskMaster today and experience a new level of task management that will simplify your life and supercharge your productivity. Say goodbye to stress and hello to efficiency!
        </p>
      </Card>
    </div>
  );
}

export default HomePage;

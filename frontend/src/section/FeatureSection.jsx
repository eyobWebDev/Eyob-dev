import { ArrowRight, ChartLineIcon, FolderClosed, Github, Handshake, MessageCircleMore, Twitter, Workflow } from "lucide-react";


export default function FeatureSection() {

    return <>
    <div className="p-4">
        <div className="text-5xl font-bold text-center mt-20 mb-20 text-gradient">Features</div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            <div className="feature-card-element shadow bg-base-300">
                <div className="feature-card-header"><FolderClosed />   <div>Workspace</div></div>
                <div className="feature-card-description">Create/join workspaces, Inside workspace: multiple projects.</div>
            </div>
            <div className="feature-card-element shadow bg-base-300">
                <div className="feature-card-header"><Workflow />   <div>Task</div></div>
                <div className="feature-card-description">Assign to team members, Due dates, priority tags, checklists.</div>
            </div>
            <div className="feature-card-element shadow bg-base-300">
                <div className="feature-card-header"><Handshake />   <div>Team Collaboration</div></div>
                <div className="feature-card-description"> Comment on tasks, @mention team members, Attach files/images, Drag & drop.</div>
            </div>
            <div className="feature-card-element shadow bg-base-300">
                <div className="feature-card-header"><ChartLineIcon />   <div>Analytics Dashboard</div></div>
                <div className="feature-card-description"> Task progress (Done/In Progress/Backlog), Team performance (tasks completed per member), Charts and data visualizations.</div>
            </div>
            <div className="feature-card-element shadow bg-base-300">
                <div className="feature-card-header"><MessageCircleMore />   <div>In App messaging</div></div>
                <div className="feature-card-description"> Direct messaging between team members, Group chat by project, Typing indicator, seen messages.</div>
            </div>
            
        </div>


     </div>
    </>
}
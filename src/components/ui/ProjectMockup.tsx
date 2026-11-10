import React from "react";
import { Landmark, Shield, HeartPulse, FileText, Users } from "lucide-react";

interface ProjectMockupProps {
  type: "ksmart" | "uisp" | "hims" | "klm" | "hrms";
  title: string;
}

export function ProjectMockup({ type }: ProjectMockupProps) {
  if (type === "ksmart") {
    return (
      <div className="w-full h-36 bg-slate-950 rounded-xl border border-slate-800/80 p-3.5 flex flex-col justify-between font-mono text-xs">
        <div className="flex items-center justify-between text-[11px] text-slate-400">
          <div className="flex items-center gap-1.5">
            <Landmark className="w-3.5 h-3.5 text-sky-400" />
            <span className="font-semibold text-white">K-SMART E-Governance</span>
          </div>
          <span className="text-[10px] text-sky-400 font-sans font-medium px-1.5 py-0.5 rounded bg-sky-500/10 border border-sky-500/20">
            Govt. of Kerala (LSGI)
          </span>
        </div>

        <div className="grid grid-cols-3 gap-2 my-1 text-center font-sans">
          <div className="p-2 rounded bg-slate-900 border border-slate-800/60">
            <div className="text-[10px] text-slate-400">Services</div>
            <div className="text-xs font-bold text-white">Public Portals</div>
          </div>
          <div className="p-2 rounded bg-slate-900 border border-slate-800/60">
            <div className="text-[10px] text-slate-400">State Layer</div>
            <div className="text-xs font-bold text-sky-400">Redux Saga</div>
          </div>
          <div className="p-2 rounded bg-slate-900 border border-slate-800/60">
            <div className="text-[10px] text-slate-400">Design</div>
            <div className="text-xs font-bold text-emerald-400">Chakra &bull; Tailwind</div>
          </div>
        </div>

        <div className="text-[10px] text-slate-400 truncate">
          Features: LSGI Citizen Services &bull; Civil Registrations &bull; Digital Permits
        </div>
      </div>
    );
  }

  if (type === "uisp") {
    return (
      <div className="w-full h-36 bg-slate-950 rounded-xl border border-slate-800/80 p-3.5 flex flex-col justify-between font-mono text-xs">
        <div className="flex items-center justify-between text-[11px] text-slate-400">
          <div className="flex items-center gap-1.5">
            <Shield className="w-3.5 h-3.5 text-emerald-400" />
            <span className="font-semibold text-white">UISP Identity Security</span>
          </div>
          <span className="text-[10px] text-emerald-400 font-sans font-medium px-1.5 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20">
            Enterprise RBAC
          </span>
        </div>

        <div className="grid grid-cols-3 gap-2 my-1 text-center font-sans">
          <div className="p-2 rounded bg-slate-900 border border-slate-800/60">
            <div className="text-[10px] text-slate-400">Framework</div>
            <div className="text-xs font-bold text-white">Next.js</div>
          </div>
          <div className="p-2 rounded bg-slate-900 border border-slate-800/60">
            <div className="text-[10px] text-slate-400">Auth Engine</div>
            <div className="text-xs font-bold text-sky-400">Centralized</div>
          </div>
          <div className="p-2 rounded bg-slate-900 border border-slate-800/60">
            <div className="text-[10px] text-slate-400">Governance</div>
            <div className="text-xs font-bold text-emerald-400">Active Audit</div>
          </div>
        </div>

        <div className="text-[10px] text-slate-400 truncate">
          Features: User Authentication &bull; Identity Governance &bull; Access Security
        </div>
      </div>
    );
  }

  if (type === "hims") {
    return (
      <div className="w-full h-36 bg-slate-950 rounded-xl border border-slate-800/80 p-3.5 flex flex-col justify-between font-mono text-xs">
        <div className="flex items-center justify-between text-[11px] text-slate-400">
          <div className="flex items-center gap-1.5">
            <HeartPulse className="w-3.5 h-3.5 text-rose-400" />
            <span className="font-semibold text-white">HIMS Clinical Suite</span>
          </div>
          <span className="text-[10px] text-indigo-400 font-sans font-medium px-1.5 py-0.5 rounded bg-indigo-500/10 border border-indigo-500/20">
            Angular 15 &bull; PrimeNG
          </span>
        </div>

        <div className="grid grid-cols-3 gap-2 my-1 text-center font-sans">
          <div className="p-2 rounded bg-slate-900 border border-slate-800/60">
            <div className="text-[10px] text-slate-400">Patient Data</div>
            <div className="text-xs font-bold text-white">EMR System</div>
          </div>
          <div className="p-2 rounded bg-slate-900 border border-slate-800/60">
            <div className="text-[10px] text-slate-400">Modules</div>
            <div className="text-xs font-bold text-sky-400">Pharmacy &bull; OPD</div>
          </div>
          <div className="p-2 rounded bg-slate-900 border border-slate-800/60">
            <div className="text-[10px] text-slate-400">Scheduling</div>
            <div className="text-xs font-bold text-emerald-400">Admissions</div>
          </div>
        </div>

        <div className="text-[10px] text-slate-400 truncate">
          Features: Consultation &bull; Appointments &bull; Pharmacy &bull; Health Records
        </div>
      </div>
    );
  }

  if (type === "klm") {
    return (
      <div className="w-full h-36 bg-slate-950 rounded-xl border border-slate-800/80 p-3.5 flex flex-col justify-between font-mono text-xs">
        <div className="flex items-center justify-between text-[11px] text-slate-400">
          <div className="flex items-center gap-1.5">
            <FileText className="w-3.5 h-3.5 text-amber-400" />
            <span className="font-semibold text-white">KLM File Management</span>
          </div>
          <span className="text-[10px] text-amber-400 font-sans font-medium px-1.5 py-0.5 rounded bg-amber-500/10 border border-amber-500/20">
            Angular 8 &bull; Java
          </span>
        </div>

        <div className="grid grid-cols-3 gap-2 my-1 text-center font-sans">
          <div className="p-2 rounded bg-slate-900 border border-slate-800/60">
            <div className="text-[10px] text-slate-400">Doc Flow</div>
            <div className="text-xs font-bold text-white">Role Routing</div>
          </div>
          <div className="p-2 rounded bg-slate-900 border border-slate-800/60">
            <div className="text-[10px] text-slate-400">Approvals</div>
            <div className="text-xs font-bold text-sky-400">Multi-tier</div>
          </div>
          <div className="p-2 rounded bg-slate-900 border border-slate-800/60">
            <div className="text-[10px] text-slate-400">Architecture</div>
            <div className="text-xs font-bold text-emerald-400">Modular</div>
          </div>
        </div>

        <div className="text-[10px] text-slate-400 truncate">
          Features: Cross-Module Document Dispatch &bull; Status Audits &bull; Approvals
        </div>
      </div>
    );
  }

  // HRMS
  return (
    <div className="w-full h-36 bg-slate-950 rounded-xl border border-slate-800/80 p-3.5 flex flex-col justify-between font-mono text-xs">
      <div className="flex items-center justify-between text-[11px] text-slate-400">
        <div className="flex items-center gap-1.5">
          <Users className="w-3.5 h-3.5 text-cyan-400" />
          <span className="font-semibold text-white">ULCCS-HRMS Suite</span>
        </div>
        <span className="text-[10px] text-cyan-400 font-sans font-medium px-1.5 py-0.5 rounded bg-cyan-500/10 border border-cyan-500/20">
          Workforce ERP
        </span>
      </div>

      <div className="grid grid-cols-3 gap-2 my-1 text-center font-sans">
        <div className="p-2 rounded bg-slate-900 border border-slate-800/60">
          <div className="text-[10px] text-slate-400">Staff</div>
          <div className="text-xs font-bold text-white">Lifecycle</div>
        </div>
        <div className="p-2 rounded bg-slate-900 border border-slate-800/60">
          <div className="text-[10px] text-slate-400">Automation</div>
          <div className="text-xs font-bold text-sky-400">Leave &bull; OT</div>
        </div>
        <div className="p-2 rounded bg-slate-900 border border-slate-800/60">
          <div className="text-[10px] text-slate-400">Services</div>
          <div className="text-xs font-bold text-emerald-400">Promotions</div>
        </div>
      </div>

      <div className="text-[10px] text-slate-400 truncate">
        Features: Employee Onboarding &bull; Probation Confirmation &bull; Payroll Integration
      </div>
    </div>
  );
}

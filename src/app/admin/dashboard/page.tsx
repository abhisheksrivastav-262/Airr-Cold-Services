"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  Calendar, CheckCircle, Clock, Search, Filter, LogOut,
  RefreshCw, Eye, AlertCircle, Phone, MapPin, Check, X, Shield, MessageSquare
} from "lucide-react";

interface Customer {
  id: string;
  name: string;
  phone: string;
  email: string | null;
}

interface PaymentRecord {
  id: string;
  transactionId: string | null;
  amount: number | null;
  status: string;
}

interface Booking {
  id: string;
  referenceNumber: string;
  category: "AC" | "RO";
  customer: Customer;
  serviceType: string;
  acType: string | null;
  acBrand: string | null;
  roBrand: string | null;
  roType: string | null;
  problemDesc: string;
  fullAddress: string;
  pinCode: string;
  preferredDate: string;
  preferredSlot: string | null;
  status: string;
  paymentStatus: string;
  transactionId: string | null;
  bookingFee: number;
  technicianNotes: string | null;
  createdAt: string;
  payments: PaymentRecord[];
}

export default function AdminDashboardPage() {
  const router = useRouter();
  const [stats, setStats] = useState<any>(null);
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("ALL");
  const [categoryFilter, setCategoryFilter] = useState("ALL");
  const [selectedBooking, setSelectedBooking] = useState<Booking | null>(null);
  const [actionLoading, setActionLoading] = useState(false);

  const fetchDashboardData = async () => {
    setLoading(true);
    try {
      const [statsRes, bookingsRes] = await Promise.all([
        fetch("/api/admin/stats"),
        fetch(`/api/admin/bookings?status=${statusFilter}&category=${categoryFilter}&search=${encodeURIComponent(search)}`),
      ]);

      if (statsRes.status === 401 || bookingsRes.status === 401) {
        router.push("/admin/login");
        return;
      }

      const statsData = await statsRes.json();
      const bookingsData = await bookingsRes.json();

      setStats(statsData.stats);
      setBookings(bookingsData.bookings || []);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDashboardData();
  }, [statusFilter, categoryFilter]);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    fetchDashboardData();
  };

  const handleUpdateBooking = async (id: string, updates: any) => {
    setActionLoading(true);
    try {
      const res = await fetch("/api/admin/bookings", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, ...updates }),
      });
      if (res.ok) {
        await fetchDashboardData();
        if (selectedBooking && selectedBooking.id === id) {
          const updated = bookings.find((b) => b.id === id);
          if (updated) setSelectedBooking({ ...updated, ...updates });
        }
      }
    } catch (err) {
      console.error(err);
    } finally {
      setActionLoading(false);
    }
  };

  const handleLogout = async () => {
    await fetch("/api/admin/logout", { method: "POST" });
    router.push("/admin/login");
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "COMPLETED":
        return <span className="px-2.5 py-1 text-xs font-semibold rounded-full bg-emerald-100 text-emerald-800">Completed</span>;
      case "CONFIRMED":
        return <span className="px-2.5 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800">Confirmed</span>;
      case "CANCELLED":
      case "REJECTED":
        return <span className="px-2.5 py-1 text-xs font-semibold rounded-full bg-red-100 text-red-800">{status}</span>;
      case "IN_PROGRESS":
        return <span className="px-2.5 py-1 text-xs font-semibold rounded-full bg-indigo-100 text-indigo-800">In Progress</span>;
      default:
        return <span className="px-2.5 py-1 text-xs font-semibold rounded-full bg-amber-100 text-amber-800">Pending</span>;
    }
  };

  const getPaymentBadge = (status: string) => {
    switch (status) {
      case "VERIFIED":
        return <span className="px-2.5 py-1 text-xs font-semibold rounded-full bg-emerald-100 text-emerald-800">Verified</span>;
      case "REJECTED":
        return <span className="px-2.5 py-1 text-xs font-semibold rounded-full bg-red-100 text-red-800">Rejected</span>;
      default:
        return <span className="px-2.5 py-1 text-xs font-semibold rounded-full bg-amber-100 text-amber-800">Pending Verif</span>;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      {/* Top Header */}
      <header className="bg-[#071B2D] text-white sticky top-0 z-40 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="relative w-36 h-10">
              <Image src="/images/logo-white.png" alt="Airr Cold Services" fill className="object-contain object-left" />
            </div>
            <div className="hidden md:flex items-center gap-2 border-l border-slate-700 pl-4">
              <span className="text-xs bg-blue-500/20 text-blue-300 border border-blue-500/40 px-2 py-0.5 rounded font-medium">Operations Desk</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/"
              target="_blank"
              className="text-xs text-slate-300 hover:text-white px-3 py-1.5 rounded-lg border border-slate-700 hover:bg-slate-800 transition"
            >
              View Live Website
            </Link>
            <button
              onClick={handleLogout}
              className="flex items-center gap-1.5 text-xs text-red-300 hover:text-red-200 px-3 py-1.5 rounded-lg bg-red-500/10 hover:bg-red-500/20 border border-red-500/30 transition cursor-pointer"
            >
              <LogOut size={14} />
              <span>Sign Out</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Metric Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
            <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">Total Bookings</div>
            <div className="text-3xl font-extrabold text-slate-900">{stats?.totalBookings ?? "—"}</div>
            <div className="text-xs text-slate-400 mt-2">All time customer orders</div>
          </div>
          <div className="bg-white p-5 rounded-2xl border border-amber-200 bg-amber-50/20 shadow-sm">
            <div className="text-xs font-semibold text-amber-600 uppercase tracking-wider mb-1">Pending Bookings</div>
            <div className="text-3xl font-extrabold text-amber-700">{stats?.pendingBookings ?? "—"}</div>
            <div className="text-xs text-amber-600/80 mt-2">Awaiting confirmation</div>
          </div>
          <div className="bg-white p-5 rounded-2xl border border-blue-200 bg-blue-50/20 shadow-sm">
            <div className="text-xs font-semibold text-blue-600 uppercase tracking-wider mb-1">Pending Payments</div>
            <div className="text-3xl font-extrabold text-blue-700">{stats?.pendingPayments ?? "—"}</div>
            <div className="text-xs text-blue-600/80 mt-2">UPI UTR verification needed</div>
          </div>
          <div className="bg-white p-5 rounded-2xl border border-emerald-200 bg-emerald-50/20 shadow-sm">
            <div className="text-xs font-semibold text-emerald-600 uppercase tracking-wider mb-1">Completed Services</div>
            <div className="text-3xl font-extrabold text-emerald-700">{stats?.completedBookings ?? "—"}</div>
            <div className="text-xs text-emerald-600/80 mt-2">Successfully serviced</div>
          </div>
        </div>

        {/* Filters and Search Bar */}
        <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm mb-6 flex flex-col md:flex-row gap-4 items-center justify-between">
          <form onSubmit={handleSearchSubmit} className="relative w-full md:w-80">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
            <input
              type="text"
              placeholder="Search reference, name, phone..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-9 pr-4 py-2 text-sm focus:outline-none focus:border-blue-500"
            />
          </form>

          <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
            <select
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
              className="bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-sm text-slate-700 focus:outline-none"
            >
              <option value="ALL">All Categories</option>
              <option value="AC">AC Services</option>
              <option value="RO">RO Water Purifiers</option>
            </select>

            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-sm text-slate-700 focus:outline-none"
            >
              <option value="ALL">All Statuses</option>
              <option value="PENDING">Pending</option>
              <option value="CONFIRMED">Confirmed</option>
              <option value="IN_PROGRESS">In Progress</option>
              <option value="COMPLETED">Completed</option>
              <option value="CANCELLED">Cancelled</option>
            </select>

            <button
              onClick={fetchDashboardData}
              className="p-2 rounded-xl border border-slate-200 text-slate-600 hover:bg-slate-100 transition cursor-pointer"
              title="Refresh"
            >
              <RefreshCw size={16} className={loading ? "animate-spin" : ""} />
            </button>
          </div>
        </div>

        {/* Bookings Table */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="px-6 py-4 border-b border-slate-200 flex justify-between items-center">
            <h2 className="font-bold text-slate-800 text-lg">Customer Bookings</h2>
            <span className="text-xs text-slate-500 font-medium">Showing {bookings.length} records</span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-slate-600">
              <thead className="bg-slate-50 text-slate-500 text-xs uppercase font-semibold border-b border-slate-200">
                <tr>
                  <th className="px-6 py-3">Ref ID</th>
                  <th className="px-6 py-3">Customer</th>
                  <th className="px-6 py-3">Service & Brand</th>
                  <th className="px-6 py-3">Preferred Date</th>
                  <th className="px-6 py-3">Booking Status</th>
                  <th className="px-6 py-3">Payment</th>
                  <th className="px-6 py-3 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {bookings.length === 0 ? (
                  <tr>
                    <td colSpan={7} className="px-6 py-12 text-center text-slate-400">
                      No bookings found matching filters.
                    </td>
                  </tr>
                ) : (
                  bookings.map((booking) => (
                    <tr key={booking.id} className="hover:bg-slate-50/80 transition-colors">
                      <td className="px-6 py-4 font-mono font-bold text-blue-600">
                        {booking.referenceNumber}
                      </td>
                      <td className="px-6 py-4">
                        <div className="font-semibold text-slate-800">{booking.customer.name}</div>
                        <div className="text-xs text-slate-400">{booking.customer.phone}</div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="font-medium text-slate-700">{booking.serviceType}</div>
                        <div className="text-xs text-slate-400">
                          {booking.category === "AC" ? (booking.acBrand || "AC Unit") : (booking.roBrand || "RO Unit")}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-slate-700">
                          {new Date(booking.preferredDate).toLocaleDateString("en-IN", {
                            day: "numeric",
                            month: "short",
                            year: "numeric",
                          })}
                        </div>
                        {booking.preferredSlot && (
                          <div className="text-xs text-slate-400">{booking.preferredSlot}</div>
                        )}
                      </td>
                      <td className="px-6 py-4">
                        {getStatusBadge(booking.status)}
                      </td>
                      <td className="px-6 py-4">
                        <div>{getPaymentBadge(booking.paymentStatus)}</div>
                        {booking.transactionId && (
                          <div className="font-mono text-xs text-slate-500 mt-1 truncate max-w-[120px]" title={booking.transactionId}>
                            UTR: {booking.transactionId}
                          </div>
                        )}
                      </td>
                      <td className="px-6 py-4 text-right">
                        <button
                          onClick={() => setSelectedBooking(booking)}
                          className="px-3 py-1.5 rounded-lg border border-blue-200 text-blue-600 hover:bg-blue-50 text-xs font-semibold inline-flex items-center gap-1.5 transition cursor-pointer"
                        >
                          <Eye size={13} />
                          <span>Details</span>
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </main>

      {/* Booking Details Modal */}
      {selectedBooking && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200">
            <div className="p-6 border-b border-slate-200 flex justify-between items-center bg-slate-50 rounded-t-2xl">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-blue-600">{selectedBooking.category} Service Order</span>
                <h3 className="text-xl font-bold text-slate-900">{selectedBooking.referenceNumber}</h3>
              </div>
              <button
                onClick={() => setSelectedBooking(null)}
                className="p-1.5 text-slate-400 hover:text-slate-600 rounded-lg hover:bg-slate-200 transition cursor-pointer"
              >
                <X size={20} />
              </button>
            </div>

            <div className="p-6 space-y-6">
              {/* Customer and Location */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Customer Info</h4>
                  <p className="font-bold text-slate-800 text-base">{selectedBooking.customer.name}</p>
                  <p className="text-sm text-slate-600 flex items-center gap-2 mt-1">
                    <Phone size={14} className="text-slate-400" />
                    <a href={`tel:${selectedBooking.customer.phone}`} className="hover:underline text-blue-600 font-medium">
                      {selectedBooking.customer.phone}
                    </a>
                  </p>
                  {selectedBooking.customer.email && (
                    <p className="text-xs text-slate-500 mt-0.5">{selectedBooking.customer.email}</p>
                  )}
                </div>

                <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Service Address</h4>
                  <p className="text-sm text-slate-700 leading-snug flex items-start gap-2">
                    <MapPin size={16} className="text-slate-400 flex-shrink-0 mt-0.5" />
                    <span>
                      {selectedBooking.fullAddress}
                      <br />
                      <strong>PIN:</strong> {selectedBooking.pinCode}
                    </span>
                  </p>
                </div>
              </div>

              {/* Service & Issue Details */}
              <div className="border border-slate-200 rounded-xl p-4">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">Service Details</h4>
                <div className="grid grid-cols-2 gap-2 text-sm mb-3">
                  <div><span className="text-slate-400">Category:</span> <span className="font-semibold text-slate-700">{selectedBooking.category}</span></div>
                  <div><span className="text-slate-400">Service:</span> <span className="font-semibold text-slate-700">{selectedBooking.serviceType}</span></div>
                  {selectedBooking.acBrand && <div><span className="text-slate-400">Brand:</span> <span className="font-semibold text-slate-700">{selectedBooking.acBrand}</span></div>}
                  {selectedBooking.roBrand && <div><span className="text-slate-400">Brand:</span> <span className="font-semibold text-slate-700">{selectedBooking.roBrand}</span></div>}
                  <div>
                    <span className="text-slate-400">Schedule:</span>{" "}
                    <span className="font-semibold text-slate-700">
                      {new Date(selectedBooking.preferredDate).toLocaleDateString()} {selectedBooking.preferredSlot ? `(${selectedBooking.preferredSlot})` : ""}
                    </span>
                  </div>
                </div>
                <div>
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1">Issue Description</span>
                  <div className="bg-slate-50 p-3 rounded-lg text-sm text-slate-700 italic border border-slate-100">
                    &ldquo;{selectedBooking.problemDesc}&rdquo;
                  </div>
                </div>
              </div>

              {/* Payment Verification Box */}
              <div className="bg-blue-50/60 border border-blue-200 rounded-xl p-4">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-blue-900">Payment & Verification</h4>
                  <div>{getPaymentBadge(selectedBooking.paymentStatus)}</div>
                </div>
                <div className="text-sm text-slate-700 space-y-1">
                  <div><strong>Booking Amount:</strong> ₹{selectedBooking.bookingFee}</div>
                  <div><strong>Transaction UTR:</strong> <span className="font-mono bg-white px-2 py-0.5 rounded border border-blue-100">{selectedBooking.transactionId || "None provided"}</span></div>
                </div>

                <div className="flex gap-2 mt-4 pt-3 border-t border-blue-200/60">
                  <button
                    disabled={actionLoading}
                    onClick={() => handleUpdateBooking(selectedBooking.id, { paymentStatus: "VERIFIED" })}
                    className="flex-1 py-2 px-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-xs font-semibold flex items-center justify-center gap-1.5 transition cursor-pointer disabled:opacity-50"
                  >
                    <Check size={14} />
                    <span>Verify Payment</span>
                  </button>
                  <button
                    disabled={actionLoading}
                    onClick={() => handleUpdateBooking(selectedBooking.id, { paymentStatus: "REJECTED" })}
                    className="py-2 px-3 bg-red-100 hover:bg-red-200 text-red-700 rounded-lg text-xs font-semibold flex items-center justify-center gap-1.5 transition cursor-pointer disabled:opacity-50"
                  >
                    <X size={14} />
                    <span>Reject Payment</span>
                  </button>
                </div>
              </div>

              {/* Status Update Actions */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Update Booking Status</h4>
                <div className="flex flex-wrap gap-2">
                  {[
                    { label: "Confirm Booking", status: "CONFIRMED", color: "bg-blue-600 hover:bg-blue-700 text-white" },
                    { label: "Mark In Progress", status: "IN_PROGRESS", color: "bg-indigo-600 hover:bg-indigo-700 text-white" },
                    { label: "Mark Completed", status: "COMPLETED", color: "bg-emerald-600 hover:bg-emerald-700 text-white" },
                    { label: "Cancel Booking", status: "CANCELLED", color: "bg-slate-200 hover:bg-slate-300 text-slate-700" },
                  ].map((btn) => (
                    <button
                      key={btn.status}
                      disabled={actionLoading}
                      onClick={() => handleUpdateBooking(selectedBooking.id, { status: btn.status })}
                      className={`px-3 py-2 rounded-lg text-xs font-semibold transition cursor-pointer disabled:opacity-50 ${btn.color}`}
                    >
                      {btn.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="p-4 bg-slate-50 border-t border-slate-200 rounded-b-2xl text-right">
              <button
                onClick={() => setSelectedBooking(null)}
                className="px-4 py-2 rounded-xl border border-slate-300 text-slate-600 hover:bg-slate-100 text-sm font-semibold cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

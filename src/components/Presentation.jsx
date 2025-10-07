
import React, { useState } from 'react';
import {
  ChevronLeft, ChevronRight, Database, GitBranch, Activity, FileText, BarChart3,
  GitMerge, Server, Users, Building2, BookOpen, AlertCircle, CheckCircle, ArrowRight, Zap
} from 'lucide-react';

const Presentation = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
{
      title: "UTS Pemrograman Backend Lanjut",
      content: (
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          <div className="flex gap-8 mb-6">
            <Database className="w-20 h-20 text-blue-500" />
            <Activity className="w-20 h-20 text-green-500" />
          </div>
          <h1 className="text-5xl font-bold text-center bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
            Message Queue & Observability
          </h1>
          <p className="text-2xl text-gray-600 text-center">
            Indah Tasya Kurina - 434231103
          </p>
        </div>
      )
    },
    {
      title: "Agenda",
      content: (
        <div className="space-y-6">
          <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
            <h3 className="text-2xl font-bold text-blue-900 mb-4">Bagian 1: Message Queue</h3>
            <ul className="space-y-2 text-lg">
              <li>✓ Konsep Dasar Message Queue</li>
              <li>✓ Perbandingan Teknologi (RabbitMQ vs Kafka)</li>
              <li>✓ Studi Kasus E-Commerce</li>
              <li>✓ Studi Kasus Universitas (Sinkronisasi Data)</li>
            </ul>
          </div>
          <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
            <h3 className="text-2xl font-bold text-green-900 mb-4">Bagian 2: Observability</h3>
            <ul className="space-y-2 text-lg">
              <li>✓ Logging, Monitoring & Tracing</li>
              <li>✓ Tools Populer untuk Observability</li>
              <li>✓ Ilustrasi Troubleshooting Performance</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      title: "Konsep Dasar Message Queue",
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-6 rounded-lg">
            <h3 className="text-2xl font-bold mb-3">Apa itu Message Queue?</h3>
            <p className="text-lg">
              Message Queue adalah sistem middleware yang memungkinkan komponen aplikasi berkomunikasi secara asynchronous melalui pesan (messages).
            </p>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div className="bg-white border-2 border-blue-300 p-4 rounded-lg text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Server className="w-8 h-8 text-blue-600" />
              </div>
              <h4 className="font-bold text-lg mb-2">Producer</h4>
              <p className="text-sm text-gray-600">Mengirim pesan ke queue</p>
            </div>
            
            <div className="bg-white border-2 border-purple-300 p-4 rounded-lg text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Database className="w-8 h-8 text-purple-600" />
              </div>
              <h4 className="font-bold text-lg mb-2">Queue</h4>
              <p className="text-sm text-gray-600">Menyimpan pesan sementara</p>
            </div>
            
            <div className="bg-white border-2 border-green-300 p-4 rounded-lg text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <GitBranch className="w-8 h-8 text-green-600" />
              </div>
              <h4 className="font-bold text-lg mb-2">Consumer</h4>
              <p className="text-sm text-gray-600">Menerima & memproses pesan</p>
            </div>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <h4 className="font-bold text-xl mb-3">Cara Kerja:</h4>
            <div className="flex items-center justify-between">
              <div className="text-center">
                <div className="w-20 h-20 bg-blue-500 text-white rounded-lg flex items-center justify-center font-bold mb-2">
                  App A
                </div>
                <p className="text-sm">Producer</p>
              </div>
              <ArrowRight className="w-8 h-8 text-gray-400" />
              <div className="text-center">
                <div className="w-24 h-20 bg-purple-500 text-white rounded-lg flex items-center justify-center font-bold mb-2">
                  Queue
                </div>
                <p className="text-sm">Message Broker</p>
              </div>
              <ArrowRight className="w-8 h-8 text-gray-400" />
              <div className="text-center">
                <div className="w-20 h-20 bg-green-500 text-white rounded-lg flex items-center justify-center font-bold mb-2">
                  App B
                </div>
                <p className="text-sm">Consumer</p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Keuntungan Message Queue",
      content: (
        <div className="grid grid-cols-2 gap-6">
          <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
            <div className="flex items-center mb-3">
              <CheckCircle className="w-8 h-8 text-blue-600 mr-3" />
              <h3 className="text-xl font-bold">Decoupling</h3>
            </div>
            <p className="text-gray-700">
              Producer dan Consumer tidak perlu tahu satu sama lain. Mereka hanya berinteraksi dengan queue.
            </p>
          </div>

          <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
            <div className="flex items-center mb-3">
              <Zap className="w-8 h-8 text-green-600 mr-3" />
              <h3 className="text-xl font-bold">Asynchronous</h3>
            </div>
            <p className="text-gray-700">
              Producer tidak perlu menunggu Consumer selesai memproses. Sistem tetap responsif.
            </p>
          </div>

          <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-500">
            <div className="flex items-center mb-3">
              <GitMerge className="w-8 h-8 text-purple-600 mr-3" />
              <h3 className="text-xl font-bold">Scalability</h3>
            </div>
            <p className="text-gray-700">
              Mudah menambah Consumer untuk handle load yang meningkat tanpa mengubah Producer.
            </p>
          </div>

          <div className="bg-orange-50 p-6 rounded-lg border-l-4 border-orange-500">
            <div className="flex items-center mb-3">
              <AlertCircle className="w-8 h-8 text-orange-600 mr-3" />
              <h3 className="text-xl font-bold">Reliability</h3>
            </div>
            <p className="text-gray-700">
              Pesan tersimpan di queue. Jika Consumer down, pesan tidak hilang dan akan diproses nanti.
            </p>
          </div>

          <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-500">
            <div className="flex items-center mb-3">
              <BarChart3 className="w-8 h-8 text-red-600 mr-3" />
              <h3 className="text-xl font-bold">Load Leveling</h3>
            </div>
            <p className="text-gray-700">
              Queue dapat menampung burst traffic, Consumer memproses sesuai kapasitasnya.
            </p>
          </div>

          <div className="bg-indigo-50 p-6 rounded-lg border-l-4 border-indigo-500">
            <div className="flex items-center mb-3">
              <Server className="w-8 h-8 text-indigo-600 mr-3" />
              <h3 className="text-xl font-bold">Fault Tolerance</h3>
            </div>
            <p className="text-gray-700">
              Sistem tetap berjalan meskipun salah satu komponen mengalami kegagalan.
            </p>
          </div>
        </div>
      )
    },
    {
      title: "Perbandingan: RabbitMQ",
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white p-6 rounded-lg">
            <h3 className="text-3xl font-bold mb-2">RabbitMQ</h3>
            <p className="text-lg">Traditional Message Broker - Protocol AMQP</p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-bold text-lg text-green-800 mb-2">✓ Kelebihan</h4>
                <ul className="space-y-2 text-sm">
                  <li>• <strong>Routing fleksibel:</strong> Exchange types (direct, topic, fanout, headers)</li>
                  <li>• <strong>Message acknowledgment:</strong> Garansi pesan terkirim</li>
                  <li>• <strong>Dead letter queue:</strong> Handle pesan yang gagal</li>
                  <li>• <strong>Easy to setup:</strong> Cepat untuk production</li>
                  <li>• <strong>Multiple protocols:</strong> AMQP, MQTT, STOMP</li>
                  <li>• <strong>Management UI:</strong> Dashboard web bawaan</li>
                </ul>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="font-bold text-lg text-red-800 mb-2">✗ Kekurangan</h4>
                <ul className="space-y-2 text-sm">
                  <li>• <strong>Throughput terbatas:</strong> ~20K msg/sec per node</li>
                  <li>• <strong>Tidak ideal untuk log:</strong> Tidak persist by default</li>
                  <li>• <strong>Clustering kompleks:</strong> Setup cluster lebih rumit</li>
                  <li>• <strong>Memory intensive:</strong> Butuh RAM besar untuk queue besar</li>
                </ul>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-bold text-lg text-blue-800 mb-2">📋 Best Use Cases</h4>
                <ul className="space-y-2 text-sm">
                  <li>• Task queue (background jobs)</li>
                  <li>• Request-response patterns</li>
                  <li>• Complex routing scenarios</li>
                  <li>• Microservices communication</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-gray-100 p-4 rounded-lg">
            <p className="text-sm text-gray-600">
              <strong>Contoh perusahaan yang menggunakan:</strong> Reddit, Robinhood, 9GAG, Stack Overflow
            </p>
          </div>
        </div>
      )
    },
    {
      title: "Perbandingan: Apache Kafka",
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-6 rounded-lg">
            <h3 className="text-3xl font-bold mb-2">Apache Kafka</h3>
            <p className="text-lg">Distributed Event Streaming Platform</p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-bold text-lg text-green-800 mb-2">✓ Kelebihan</h4>
                <ul className="space-y-2 text-sm">
                  <li>• <strong>High throughput:</strong> Jutaan msg/sec</li>
                  <li>• <strong>Persistent storage:</strong> Data tersimpan di disk</li>
                  <li>• <strong>Replay messages:</strong> Consumer bisa baca ulang</li>
                  <li>• <strong>Horizontal scaling:</strong> Mudah scale dengan partitions</li>
                  <li>• <strong>Stream processing:</strong> Real-time data processing</li>
                  <li>• <strong>Durability:</strong> Replication untuk fault tolerance</li>
                </ul>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="font-bold text-lg text-red-800 mb-2">✗ Kekurangan</h4>
                <ul className="space-y-2 text-sm">
                  <li>• <strong>Kompleksitas tinggi:</strong> Learning curve curam</li>
                  <li>• <strong>Setup sulit:</strong> Butuh Zookeeper (Kafka kurang dari 3.0)</li>
                  <li>• <strong>Overhead:</strong> Tidak cocok untuk volume kecil</li>
                  <li>• <strong>No native routing:</strong> Routing logic di aplikasi</li>
                  <li>• <strong>Resource intensive:</strong> Butuh infrastruktur kuat</li>
                </ul>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-bold text-lg text-blue-800 mb-2">📋 Best Use Cases</h4>
                <ul className="space-y-2 text-sm">
                  <li>• Event sourcing & CQRS</li>
                  <li>• Real-time analytics</li>
                  <li>• Log aggregation</li>
                  <li>• Data pipeline & ETL</li>
                  <li>• Activity tracking</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-gray-100 p-4 rounded-lg">
            <p className="text-sm text-gray-600">
              <strong>Contoh perusahaan yang menggunakan:</strong> LinkedIn, Netflix, Uber, Spotify, Twitter
            </p>
          </div>
        </div>
      )
    },
    {
      title: "Tabel Perbandingan RabbitMQ vs Kafka",
      content: (
        <div className="space-y-4">
          <div className="overflow-auto">
            <table className="w-full border-collapse bg-white shadow-lg rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-gradient-to-r from-gray-700 to-gray-800 text-white">
                  <th className="p-4 text-left font-bold">Aspek</th>
                  <th className="p-4 text-left font-bold">RabbitMQ</th>
                  <th className="p-4 text-left font-bold">Apache Kafka</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr className="border-b bg-gray-50">
                  <td className="p-4 font-semibold">Model</td>
                  <td className="p-4">Message Broker (Push)</td>
                  <td className="p-4">Event Stream (Pull)</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 font-semibold">Throughput</td>
                  <td className="p-4">~20K msg/sec</td>
                  <td className="p-4">Millions msg/sec</td>
                </tr>
                <tr className="border-b bg-gray-50">
                  <td className="p-4 font-semibold">Persistence</td>
                  <td className="p-4">Optional (in-memory default)</td>
                  <td className="p-4">Always (disk-based)</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 font-semibold">Message Retention</td>
                  <td className="p-4">Dihapus setelah consumed</td>
                  <td className="p-4">Configurable (days/weeks)</td>
                </tr>
                <tr className="border-b bg-gray-50">
                  <td className="p-4 font-semibold">Routing</td>
                  <td className="p-4">✓ Complex (4 exchange types)</td>
                  <td className="p-4">✗ Simple (topic-based)</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 font-semibold">Message Replay</td>
                  <td className="p-4">✗ Not supported</td>
                  <td className="p-4">✓ Supported</td>
                </tr>
                <tr className="border-b bg-gray-50">
                  <td className="p-4 font-semibold">Setup Complexity</td>
                  <td className="p-4">Easy</td>
                  <td className="p-4">Complex</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 font-semibold">Use Case Utama</td>
                  <td className="p-4">Task queues, RPC, routing</td>
                  <td className="p-4">Event streaming, logging, analytics</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
            <p className="font-semibold text-blue-900">💡 Kesimpulan:</p>
            <p className="text-sm text-blue-800 mt-2">
              Gunakan <strong>RabbitMQ</strong> untuk task queues dengan routing kompleks dan volume moderate. 
              Gunakan <strong>Kafka</strong> untuk event streaming, high throughput, dan perlu replay capability.
            </p>
          </div>
        </div>
      )
    },
    {
      title: "Studi Kasus 1: E-Commerce",
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-purple-600 to-purple-700 text-white p-6 rounded-lg">
            <h3 className="text-2xl font-bold mb-2">Aplikasi E-Commerce</h3>
            <p className="text-lg">Bagian mana yang cocok menggunakan Message Queue?</p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-green-50 p-5 rounded-lg border-2 border-green-500">
              <h4 className="font-bold text-xl text-green-800 mb-3">1. Order Processing</h4>
              <p className="text-sm mb-3"><strong>Kenapa cocok:</strong></p>
              <ul className="text-sm space-y-2">
                <li>• User tidak perlu tunggu proses lengkap</li>
                <li>• Banyak step: validasi, payment, inventory, shipping</li>
                <li>• High traffic saat promo/flash sale</li>
                <li>• Perlu reliability - order tidak boleh hilang</li>
              </ul>
              <div className="mt-3 p-3 bg-white rounded">
                <p className="text-xs font-mono">User → Queue → [Validate, Pay, Stock, Ship]</p>
              </div>
            </div>

            <div className="bg-blue-50 p-5 rounded-lg border-2 border-blue-500">
              <h4 className="font-bold text-xl text-blue-800 mb-3">2. Email/Notification</h4>
              <p className="text-sm mb-3"><strong>Kenapa cocok:</strong></p>
              <ul className="text-sm space-y-2">
                <li>• Tidak urgent (bisa delay beberapa detik)</li>
                <li>• User tidak perlu tunggu email terkirim</li>
                <li>• Volume besar saat campaign</li>
                <li>• Retry jika email server down</li>
              </ul>
              <div className="mt-3 p-3 bg-white rounded">
                <p className="text-xs font-mono">Event → Queue → Email Service</p>
              </div>
            </div>

            <div className="bg-orange-50 p-5 rounded-lg border-2 border-orange-500">
              <h4 className="font-bold text-xl text-orange-800 mb-3">3. Inventory Update</h4>
              <p className="text-sm mb-3"><strong>Kenapa cocok:</strong></p>
              <ul className="text-sm space-y-2">
                <li>• Sync real-time ke warehouse system</li>
                <li>• Multiple warehouses perlu update</li>
                <li>• Avoid race condition saat concurrent order</li>
                <li>• Audit trail untuk stock movement</li>
              </ul>
              <div className="mt-3 p-3 bg-white rounded">
                <p className="text-xs font-mono">Order → Queue → Warehouse 1,2,3</p>
              </div>
            </div>

            <div className="bg-red-50 p-5 rounded-lg border-2 border-red-500">
              <h4 className="font-bold text-xl text-red-800 mb-3">4. Analytics/Reporting</h4>
              <p className="text-sm mb-3"><strong>Kenapa cocok:</strong></p>
              <ul className="text-sm space-y-2">
                <li>• Heavy computation tidak boleh block user</li>
                <li>• Aggregate data dari multiple sources</li>
                <li>• Batch processing untuk dashboard</li>
                <li>• Event tracking untuk behavior analysis</li>
              </ul>
              <div className="mt-3 p-3 bg-white rounded">
                <p className="text-xs font-mono">Events → Queue → Analytics Engine</p>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-500">
            <p className="font-semibold text-yellow-900">⚠️ Tidak Cocok untuk:</p>
            <p className="text-sm text-yellow-800 mt-2">
              • User authentication (butuh sync response) • Search product (perlu real-time hasil) • Cart operations (perlu instant feedback)
            </p>
          </div>
        </div>
      )
    },
    {
      title: "Studi Kasus 2: Sistem Universitas - Problem",
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-indigo-600 to-indigo-700 text-white p-6 rounded-lg">
            <h3 className="text-2xl font-bold mb-2">Sistem Terintegrasi Universitas</h3>
            <p className="text-lg">Masalah Sinkronisasi Data Master</p>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div className="bg-blue-100 p-4 rounded-lg border-2 border-blue-500">
              <div className="flex items-center mb-2">
                <BookOpen className="w-8 h-8 text-blue-600 mr-2" />
                <h4 className="font-bold text-lg">SIAKAD</h4>
              </div>
              <p className="text-sm mb-2">Sistem Informasi Akademik</p>
              <ul className="text-xs space-y-1">
                <li>• Data mahasiswa</li>
                <li>• Jadwal kuliah</li>
                <li>• Nilai & transkrip</li>
              </ul>
              <div className="mt-2 p-2 bg-white rounded text-xs">
                <strong>Perlu:</strong> Data dosen & ruangan
              </div>
            </div>

            <div className="bg-green-100 p-4 rounded-lg border-2 border-green-500">
              <div className="flex items-center mb-2">
                <Users className="w-8 h-8 text-green-600 mr-2" />
                <h4 className="font-bold text-lg">SIMPEG</h4>
              </div>
              <p className="text-sm mb-2">Sistem Kepegawaian</p>
              <ul className="text-xs space-y-1">
                <li>• Data dosen</li>
                <li>• Data tendik</li>
                <li>• Kenaikan pangkat</li>
              </ul>
              <div className="mt-2 p-2 bg-white rounded text-xs">
                <strong>Master:</strong> Dosen & Tendik
              </div>
            </div>

            <div className="bg-purple-100 p-4 rounded-lg border-2 border-purple-500">
              <div className="flex items-center mb-2">
                <Building2 className="w-8 h-8 text-purple-600 mr-2" />
                <h4 className="font-bold text-lg">SIMSARPRAS</h4>
              </div>
              <p className="text-sm mb-2">Sistem Sarana Prasarana</p>
              <ul className="text-xs space-y-1">
                <li>• Data gedung</li>
                <li>• Data ruangan</li>
                <li>• Kapasitas</li>
              </ul>
              <div className="mt-2 p-2 bg-white rounded text-xs">
                <strong>Master:</strong> Gedung & Ruangan
              </div>
            </div>
          </div>

          <div className="bg-red-50 p-5 rounded-lg border-l-4 border-red-500">
            <h4 className="font-bold text-xl text-red-800 mb-3 flex items-center">
              <AlertCircle className="w-6 h-6 mr-2" />
              Permasalahan Utama
            </h4>
            <div className="space-y-3">
              <div className="bg-white p-3 rounded">
                <p className="font-semibold text-red-700">Problem 1: Update Data Master</p>
                <p className="text-sm text-gray-700 mt-1">
                  Ketika data dosen diupdate di SIMPEG, data yang sama di SIAKAD tidak otomatis berubah.
                </p>
              </div>
              <div className="bg-white p-3 rounded">
                <p className="font-semibold text-red-700">Problem 2: Multiple Dependencies</p>
                <p className="text-sm text-gray-700 mt-1">
                  Semakin banyak aplikasi yang butuh data master, semakin kompleks sinkronisasinya.
                </p>
              </div>
              <div className="bg-white p-3 rounded">
                <p className="font-semibold text-red-700">Problem 3: Tight Coupling</p>
                <p className="text-sm text-gray-700 mt-1">
                  Aplikasi master harus tahu semua aplikasi yang perlu diupdate.
                </p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Studi Kasus 2: Solusi dengan Message Queue",
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-green-600 to-green-700 text-white p-6 rounded-lg">
            <h3 className="text-2xl font-bold mb-2">Solusi: Event-Driven Architecture dengan Kafka</h3>
            <p className="text-lg">Menggunakan Apache Kafka untuk Data Synchronization</p>
          </div>

          <div className="bg-blue-50 p-5 rounded-lg border-l-4 border-blue-500">
            <h4 className="font-bold text-xl text-blue-800 mb-3">Arsitektur Solusi</h4>
            <div className="bg-white p-4 rounded-lg">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="text-center flex-1">
                    <div className="bg-green-500 text-white p-4 rounded-lg mb-2">
                      <p className="font-bold">SIMPEG</p>
                      <p className="text-xs">(Master Pegawai)</p>
                    </div>
                  </div>
                  <ArrowRight className="w-6 h-6 text-gray-400 mx-2" />
                  <div className="text-center flex-1">
                    <div className="bg-purple-600 text-white p-4 rounded-lg mb-2">
                      <p className="font-bold">KAFKA</p>
                      <p className="text-xs mt-1">pegawai.updated</p>
                      <p className="text-xs">pegawai.created</p>
                    </div>
                  </div>
                  <ArrowRight className="w-6 h-6 text-gray-400 mx-2" />
                  <div className="text-center flex-1">
                    <div className="space-y-2">
                      <div className="bg-blue-500 text-white p-2 rounded text-xs">SIAKAD</div>
                      <div className="bg-orange-500 text-white p-2 rounded text-xs">App Lain</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-bold text-green-800 mb-2">✓ Keuntungan</h4>
              <ul className="text-sm space-y-2">
                <li>• <strong>Decoupling:</strong> Master tidak tahu subscriber</li>
                <li>• <strong>Scalable:</strong> Tambah app baru tinggal subscribe</li>
                <li>• <strong>Reliable:</strong> Event tersimpan, bisa replay</li>
                <li>• <strong>Audit trail:</strong> Semua perubahan terekam</li>
                <li>• <strong>Real-time:</strong> Update langsung terpropagasi</li>
              </ul>
            </div>
            
            <div className="bg-yellow-50 p-4 rounded-lg">
              <h4 className="font-bold text-yellow-800 mb-2">⚙️ Implementasi</h4>
              <ul className="text-sm space-y-2">
                <li>• <strong>Event format:</strong> JSON schema</li>
                <li>• <strong>Consumer groups:</strong> Setiap app punya group ID</li>
                <li>• <strong>Idempotency:</strong> Handle duplicate events</li>
                <li>• <strong>Error handling:</strong> Dead letter queue</li>
                <li>• <strong>Monitoring:</strong> Track lag & throughput</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },

    {
      title: "Bagian 2: Observability",
      content: (
        <div className="flex flex-col items-center justify-center h-full space-y-6">
          <h1 className="text-4xl font-bold text-center bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
            Jawaban Nomor 2 – Observability
          </h1>
          <p className="text-xl text-gray-700 text-center">
            Berikut pembahasan lengkap terkait Observability.
          </p>
        </div>
      )
    },
    {
      title: "Observability: Monitoring Backend Systems",
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-cyan-600 to-blue-700 text-white p-6 rounded-lg">
            <h3 className="text-3xl font-bold mb-2">What is Observability?</h3>
            <p className="text-lg">Kemampuan untuk memahami internal state sistem dari output yang dihasilkan</p>
          </div>

          <div className="grid grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-green-500 to-green-600 text-white p-6 rounded-lg shadow-lg">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="w-10 h-10" />
              </div>
              <h4 className="text-2xl font-bold text-center mb-3">Logging</h4>
              <p className="text-sm text-center">
                Record of discrete events yang terjadi dalam aplikasi
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-6 rounded-lg shadow-lg">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="w-10 h-10" />
              </div>
              <h4 className="text-2xl font-bold text-center mb-3">Monitoring</h4>
              <p className="text-sm text-center">
                Numeric measurements yang diambil over time
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white p-6 rounded-lg shadow-lg">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <GitMerge className="w-10 h-10" />
              </div>
              <h4 className="text-2xl font-bold text-center mb-3">Tracing</h4>
              <p className="text-sm text-center">
                Journey of a request through distributed systems
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-orange-100 to-red-100 p-5 rounded-lg border-2 border-orange-400">
            <h4 className="font-bold text-xl text-orange-900 mb-3">The Three Pillars of Observability</h4>
            <p className="text-gray-800">
              Kombinasi dari Logs, Metrics, dan Traces memberikan visibility penuh terhadap sistem.
            </p>
          </div>
        </div>
      )
    },
    {
      title: "Logging: Recording Events",
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-green-600 to-green-700 text-white p-5 rounded-lg">
            <div className="flex items-center">
              <FileText className="w-12 h-12 mr-4" />
              <div>
                <h3 className="text-2xl font-bold">Logging</h3>
                <p className="text-lg">Merekam kejadian-kejadian diskrit dalam aplikasi</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-bold text-lg text-blue-900 mb-2">Karakteristik</h4>
                <ul className="space-y-2 text-sm">
                  <li>• Timestamped: Setiap log punya timestamp</li>
                  <li>• Contextual: Informasi detail tentang event</li>
                  <li>• Structured/Unstructured: Bisa text atau JSON</li>
                  <li>• Levels: DEBUG, INFO, WARN, ERROR, FATAL</li>
                  <li>• Immutable: Sekali ditulis tidak berubah</li>
                </ul>
              </div>

              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-bold text-lg text-green-900 mb-2">Kapan Digunakan</h4>
                <ul className="space-y-2 text-sm">
                  <li>✓ Debug application errors</li>
                  <li>✓ Audit user activities</li>
                  <li>✓ Track business events</li>
                  <li>✓ Security monitoring</li>
                  <li>✓ Compliance requirements</li>
                </ul>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-xs">
                <p className="text-gray-500"># Structured Log (JSON)</p>
                <p className="text-white">{'{'}</p>
                <p>  "timestamp": "2025-10-05T10:30:15Z",</p>
                <p>  "level": "ERROR",</p>
                <p>  "message": "Database failed",</p>
                <p>  "service": "user-service"</p>
                <p className="text-white">{'}'}</p>
              </div>

              <div className="bg-yellow-50 p-4 rounded-lg">
                <h4 className="font-bold text-lg text-yellow-900 mb-2">Best Practices</h4>
                <ul className="space-y-1 text-xs">
                  <li>• Gunakan structured logging (JSON)</li>
                  <li>• Include correlation ID</li>
                  <li>• Jangan log sensitive data</li>
                  <li>• Set appropriate log levels</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Monitoring: Measuring Performance",
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-5 rounded-lg">
            <div className="flex items-center">
              <BarChart3 className="w-12 h-12 mr-4" />
              <div>
                <h3 className="text-2xl font-bold">Monitoring (Metrics)</h3>
                <p className="text-lg">Mengukur dan mengagregasi data numerik dari sistem</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-bold text-lg text-blue-900 mb-2">Karakteristik</h4>
                <ul className="space-y-2 text-sm">
                  <li>• Numerical: Data dalam bentuk angka</li>
                  <li>• Time-series: Data berubah seiring waktu</li>
                  <li>• Aggregated: Bisa di-average, sum, percentile</li>
                  <li>• Alerting: Trigger notif jika threshold terlewati</li>
                </ul>
              </div>

              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-bold text-lg text-green-900 mb-2">Jenis Metrics</h4>
                <ul className="space-y-2 text-sm">
                  <li>• Counter: Total requests</li>
                  <li>• Gauge: CPU usage</li>
                  <li>• Histogram: Response times</li>
                  <li>• Summary: p50, p95, p99</li>
                </ul>
              </div>

              <div className="bg-purple-50 p-4 rounded-lg">
                <h4 className="font-bold text-lg text-purple-900 mb-2">Golden Signals</h4>
                <ul className="space-y-2 text-sm">
                  <li>📊 Latency: Waktu respons</li>
                  <li>📈 Traffic: Request per detik</li>
                  <li>❌ Errors: Rate of failures</li>
                  <li>💾 Saturation: Resource usage</li>
                </ul>
              </div>
            </div>

            <div className="bg-white border-2 border-blue-300 p-4 rounded-lg">
              <h4 className="font-bold text-lg mb-3">Contoh Dashboard</h4>
              <div className="space-y-3">
                <div className="bg-green-100 p-3 rounded">
                  <p className="text-xs text-gray-600">Response Time (p95)</p>
                  <p className="text-2xl font-bold text-green-700">245ms</p>
                </div>
                
                <div className="bg-blue-100 p-3 rounded">
                  <p className="text-xs text-gray-600">Requests/Second</p>
                  <p className="text-2xl font-bold text-blue-700">1,542</p>
                </div>
                
                <div className="bg-red-100 p-3 rounded">
                  <p className="text-xs text-gray-600">Error Rate</p>
                  <p className="text-2xl font-bold text-red-700">0.3%</p>
                </div>
                
                <div className="bg-orange-100 p-3 rounded">
                  <p className="text-xs text-gray-600">CPU Usage</p>
                  <p className="text-2xl font-bold text-orange-700">68%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Tracing: Following Request Journey",
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-purple-600 to-purple-700 text-white p-5 rounded-lg">
            <div className="flex items-center">
              <GitMerge className="w-12 h-12 mr-4" />
              <div>
                <h3 className="text-2xl font-bold">Distributed Tracing</h3>
                <p className="text-lg">Melacak perjalanan request through multiple services</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="bg-purple-50 p-4 rounded-lg">
                <h4 className="font-bold text-lg text-purple-900 mb-2">Karakteristik</h4>
                <ul className="space-y-2 text-sm">
                  <li>• Trace: Satu request journey end-to-end</li>
                  <li>• Span: Unit of work dalam trace</li>
                  <li>• Parent-Child: Relationship antar spans</li>
                  <li>• Context Propagation: Trace ID diteruskan</li>
                  <li>• Timing: Duration setiap operation</li>
                </ul>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-bold text-lg text-blue-900 mb-2">Kenapa Penting?</h4>
                <ul className="space-y-2 text-sm">
                  <li>✓ Root cause analysis</li>
                  <li>✓ Performance optimization</li>
                  <li>✓ Dependency mapping</li>
                  <li>✓ Error context</li>
                </ul>
              </div>
            </div>

            <div className="bg-white border-2 border-purple-300 p-4 rounded-lg">
              <h4 className="font-bold text-lg mb-3">Visualisasi Trace</h4>
              <div className="space-y-1">
                <div className="bg-blue-500 text-white p-2 rounded text-xs flex justify-between">
                  <span>API Gateway</span>
                  <span>50ms</span>
                </div>
                <div className="ml-4 bg-green-500 text-white p-2 rounded text-xs flex justify-between">
                  <span>Auth Service</span>
                  <span>30ms</span>
                </div>
                <div className="ml-4 bg-purple-500 text-white p-2 rounded text-xs flex justify-between">
                  <span>User Service</span>
                  <span>120ms</span>
                </div>
                <div className="ml-8 bg-orange-500 text-white p-2 rounded text-xs flex justify-between">
                  <span>Database Query</span>
                  <span>80ms</span>
                </div>
              </div>
              <div className="mt-4 p-3 bg-gray-100 rounded">
                <p className="text-xs font-bold">Total: 245ms</p>
                <p className="text-xs text-gray-600">Bottleneck: Database (80ms)</p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Perbandingan: Logging vs Monitoring vs Tracing",
      content: (
        <div className="space-y-6">
          <table className="w-full border-collapse bg-white shadow-lg rounded-lg overflow-hidden">
            <thead>
              <tr className="bg-gradient-to-r from-gray-700 to-gray-800 text-white">
                <th className="p-4 text-left font-bold">Aspek</th>
                <th className="p-4 text-left font-bold">Logging</th>
                <th className="p-4 text-left font-bold">Monitoring</th>
                <th className="p-4 text-left font-bold">Tracing</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              <tr className="border-b bg-gray-50">
                <td className="p-4 font-semibold">Tipe Data</td>
                <td className="p-4">Text/JSON events</td>
                <td className="p-4">Numerical metrics</td>
                <td className="p-4">Request spans</td>
              </tr>
              <tr className="border-b">
                <td className="p-4 font-semibold">Best For</td>
                <td className="p-4">Debugging, audit</td>
                <td className="p-4">Performance, alerts</td>
                <td className="p-4">Latency analysis</td>
              </tr>
              <tr className="border-b bg-gray-50">
                <td className="p-4 font-semibold">Question</td>
                <td className="p-4">"What happened?"</td>
                <td className="p-4">"How much?"</td>
                <td className="p-4">"Where slow?"</td>
              </tr>
              <tr className="border-b">
                <td className="p-4 font-semibold">Example</td>
                <td className="p-4 text-xs">User login failed</td>
                <td className="p-4 text-xs">CPU: 75%</td>
                <td className="p-4 text-xs">Request: 245ms</td>
              </tr>
            </tbody>
          </table>

          <div className="bg-gradient-to-r from-indigo-100 to-purple-100 p-5 rounded-lg border-2 border-indigo-400">
            <p className="font-bold text-indigo-900 text-lg mb-2">💡 Best Practice: Gunakan Ketiganya!</p>
            <p className="text-sm text-indigo-800">
              Observability terbaik dicapai dengan kombinasi Logging, Monitoring, dan Tracing.
            </p>
          </div>
        </div>
      )
    },
    {
      title: "Tools Populer untuk Observability",
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white p-5 rounded-lg">
            <h3 className="text-2xl font-bold">Observability Stack</h3>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white border-2 border-blue-400 p-5 rounded-lg">
              <h4 className="font-bold text-xl text-blue-900 mb-3">Prometheus + Grafana</h4>
              <div className="mb-3">
                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-semibold">Monitoring</span>
              </div>
              <ul className="text-sm space-y-2 mb-3">
                <li>• Prometheus: Time-series database</li>
                <li>• Grafana: Visualization & dashboards</li>
                <li>• Open-source & widely adopted</li>
                <li>• Powerful query language (PromQL)</li>
              </ul>
              <div className="bg-blue-50 p-3 rounded">
                <p className="text-xs font-semibold">Best for: Infrastructure monitoring, metrics, alerting</p>
              </div>
            </div>

            <div className="bg-white border-2 border-yellow-400 p-5 rounded-lg">
              <h4 className="font-bold text-xl text-yellow-900 mb-3">ELK Stack</h4>
              <div className="mb-3">
                <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs font-semibold">Logging</span>
              </div>
              <ul className="text-sm space-y-2 mb-3">
                <li>• Elasticsearch: Search engine</li>
                <li>• Logstash: Log processing</li>
                <li>• Kibana: Visualization</li>
                <li>• Full-text search capabilities</li>
              </ul>
              <div className="bg-yellow-50 p-3 rounded">
                <p className="text-xs font-semibold">Best for: Log aggregation, search, analysis</p>
              </div>
            </div>

            <div className="bg-white border-2 border-purple-400 p-5 rounded-lg">
              <h4 className="font-bold text-xl text-purple-900 mb-3">Jaeger / Zipkin</h4>
              <div className="mb-3">
                <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs font-semibold">Tracing</span>
              </div>
              <ul className="text-sm space-y-2 mb-3">
                <li>• Distributed tracing systems</li>
                <li>• Jaeger: CNCF project, modern UI</li>
                <li>• Zipkin: Twitter origin, mature</li>
                <li>• OpenTelemetry compatible</li>
              </ul>
              <div className="bg-purple-50 p-3 rounded">
                <p className="text-xs font-semibold">Best for: Microservices tracing, latency analysis</p>
              </div>
            </div>

            <div className="bg-white border-2 border-green-400 p-5 rounded-lg">
              <h4 className="font-bold text-xl text-green-900 mb-3">Datadog / New Relic</h4>
              <div className="mb-3">
                <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-semibold">All-in-One</span>
              </div>
              <ul className="text-sm space-y-2 mb-3">
                <li>• Commercial SaaS platforms</li>
                <li>• Logs + Metrics + Traces unified</li>
                <li>• Easy setup & integration</li>
                <li>• Advanced APM features</li>
              </ul>
              <div className="bg-green-50 p-3 rounded">
                <p className="text-xs font-semibold">Best for: Enterprise, complete observability</p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Studi Kasus: Backend Melambat",
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-red-600 to-red-700 text-white p-6 rounded-lg">
            <div className="flex items-center">
              <AlertCircle className="w-12 h-12 mr-4" />
              <div>
                <h3 className="text-2xl font-bold">Problem: Aplikasi Backend Tiba-tiba Lambat</h3>
                <p className="text-lg">Bagaimana Observability Membantu?</p>
              </div>
            </div>
          </div>

          <div className="bg-red-50 p-5 rounded-lg border-l-4 border-red-500">
            <h4 className="font-bold text-xl text-red-900 mb-2">🚨 Situasi</h4>
            <p className="text-gray-800">
              Pukul 14:00, user mulai komplain bahwa aplikasi sangat lambat. Dashboard menunjukkan 
              response time naik dari 200ms menjadi 5 detik. Error rate juga meningkat dari 0.1% ke 2%.
            </p>
          </div>

          <div className="bg-white p-5 border-2 border-gray-300 rounded-lg">
            <h4 className="font-bold text-xl mb-4">🔍 Investigation Flow</h4>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">1</div>
                <div className="flex-1">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h5 className="font-bold text-blue-900 mb-2">📊 Check Monitoring Dashboard</h5>
                    <p className="text-sm text-gray-700 mb-2">Lihat metrics untuk identifikasi pattern:</p>
                    <ul className="text-sm space-y-1">
                      <li>• Response time (p95): 200ms → 5000ms ⚠️</li>
                      <li>• Requests/sec: 1500 → 1500 (normal)</li>
                      <li>• Error rate: 0.1% → 2% ⚠️</li>
                      <li>• CPU usage: 45% → 48% (normal)</li>
                      <li>• Memory: 2.1GB → 2.3GB (normal)</li>
                    </ul>
                    <div className="mt-2 p-2 bg-white rounded border-l-4 border-blue-600">
                      <p className="text-xs font-semibold text-blue-900">Finding: Slowness bukan karena CPU/Memory</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-purple-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">2</div>
                <div className="flex-1">
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h5 className="font-bold text-purple-900 mb-2">🔗 Check Distributed Traces</h5>
                    <p className="text-sm text-gray-700 mb-2">Analisa sample slow requests:</p>
                    <div className="bg-white p-3 rounded space-y-1 text-xs font-mono">
                      <div className="flex justify-between"><span>API Gateway</span><span className="text-green-600">50ms ✓</span></div>
                      <div className="flex justify-between ml-2"><span>Auth Service</span><span className="text-green-600">30ms ✓</span></div>
                      <div className="flex justify-between ml-2"><span>Product Service</span><span className="text-red-600">4800ms ⚠️</span></div>
                      <div className="flex justify-between ml-4"><span>└─ Database Query</span><span className="text-red-600">4750ms ⚠️</span></div>
                      <div className="flex justify-between ml-2"><span>Response</span><span className="text-green-600">120ms ✓</span></div>
                    </div>
                    <div className="mt-2 p-2 bg-white rounded border-l-4 border-purple-600">
                      <p className="text-xs font-semibold text-purple-900">Finding: Database query sangat lambat!</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-green-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">3</div>
                <div className="flex-1">
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h5 className="font-bold text-green-900 mb-2">📝 Check Logs</h5>
                    <p className="text-sm text-gray-700 mb-2">Filter logs dari Product Service & Database:</p>
                    <div className="bg-gray-900 text-green-400 p-3 rounded text-xs font-mono space-y-1">
                      <p>[14:00:15] <span className="text-yellow-400">WARN</span> Query timeout: SELECT * FROM products...</p>
                      <p>[14:00:18] <span className="text-red-400">ERROR</span> Database connection pool exhausted</p>
                      <p>[14:00:20] <span className="text-yellow-400">WARN</span> Slow query detected: 4.8s</p>
                      <p>[14:00:25] <span className="text-red-400">ERROR</span> Query: SELECT * FROM products WHERE category...</p>
                    </div>
                    <div className="mt-2 p-2 bg-white rounded border-l-4 border-green-600">
                      <p className="text-xs font-semibold text-green-900">Finding: Specific query yang problematic!</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-orange-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">4</div>
                <div className="flex-1">
                  <div className="bg-orange-50 p-4 rounded-lg">
                    <h5 className="font-bold text-orange-900 mb-2">🎯 Root Cause Identified</h5>
                    <p className="text-sm text-gray-700 mb-2">
                      Query `SELECT * FROM products WHERE category = 'electronics'` tidak punya index!
                      Tabel products bertambah dari 10K menjadi 1M rows karena import bulk data pagi tadi.
                    </p>
                    <div className="bg-white p-3 rounded">
                      <p className="text-xs font-semibold mb-1">Problem:</p>
                      <p className="text-xs">• Full table scan pada 1M rows</p>
                      <p className="text-xs">• Missing index pada kolom category</p>
                      <p className="text-xs">• Connection pool habis karena query lama</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-green-700 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">5</div>
                <div className="flex-1">
                  <div className="bg-green-100 p-4 rounded-lg border-2 border-green-500">
                    <h5 className="font-bold text-green-900 mb-2">✅ Solution Implemented</h5>
                    <div className="bg-white p-3 rounded font-mono text-xs">
                      <p className="text-gray-600">-- Add index</p>
                      <p>CREATE INDEX idx_products_category</p>
                      <p>ON products(category);</p>
                    </div>
                    <div className="mt-2 p-2 bg-green-50 rounded">
                      <p className="text-xs">Result: Query time: 4.8s → 45ms ✅</p>
                      <p className="text-xs">Impact: Response time kembali normal dalam 2 menit</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "How Observability Helped",
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-cyan-600 to-blue-700 text-white p-5 rounded-lg">
            <h3 className="text-2xl font-bold">Observability in Action</h3>
            <p className="text-lg">Dari Alert sampai Resolution</p>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div className="bg-blue-50 p-4 rounded-lg border-2 border-blue-500">
              <div className="flex items-center mb-3">
                <BarChart3 className="w-8 h-8 text-blue-600 mr-2" />
                <h4 className="font-bold text-lg">Monitoring</h4>
              </div>
              <p className="text-sm text-gray-700 mb-2">Memberikan Alert:</p>
              <ul className="text-xs space-y-1">
                <li>✓ Response time anomaly detected</li>
                <li>✓ Error rate threshold exceeded</li>
                <li>✓ Menunjukkan "ada masalah"</li>
                <li>✓ Tapi tidak tahu di mana</li>
              </ul>
            </div>

            <div className="bg-purple-50 p-4 rounded-lg border-2 border-purple-500">
              <div className="flex items-center mb-3">
                <GitMerge className="w-8 h-8 text-purple-600 mr-2" />
                <h4 className="font-bold text-lg">Tracing</h4>
              </div>
              <p className="text-sm text-gray-700 mb-2">Memberikan Lokasi:</p>
              <ul className="text-xs space-y-1">
                <li>✓ Isolate service yang lambat</li>
                <li>✓ Database query adalah bottleneck</li>
                <li>✓ Menunjukkan "di mana masalah"</li>
                <li>✓ Tapi tidak tahu kenapa</li>
              </ul>
            </div>

            <div className="bg-green-50 p-4 rounded-lg border-2 border-green-500">
              <div className="flex items-center mb-3">
                <FileText className="w-8 h-8 text-green-600 mr-2" />
                <h4 className="font-bold text-lg">Logging</h4>
              </div>
              <p className="text-sm text-gray-700 mb-2">Memberikan Context:</p>
              <ul className="text-xs space-y-1">
                <li>✓ Specific query yang lambat</li>
                <li>✓ Query parameters & conditions</li>
                <li>✓ Menunjukkan "kenapa terjadi"</li>
                <li>✓ Root cause teridentifikasi</li>
              </ul>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg border-2 border-gray-300">
            <h4 className="font-bold text-xl mb-4 text-center">Complete Investigation Flow</h4>
            <div className="flex items-center justify-between">
              <div className="text-center">
                <div className="w-24 h-24 bg-red-500 text-white rounded-lg flex items-center justify-center mb-2">
                  <AlertCircle className="w-12 h-12" />
                </div>
                <p className="font-bold text-sm">Alert</p>
                <p className="text-xs text-gray-600">Monitoring</p>
              </div>
              
              <ArrowRight className="w-8 h-8 text-gray-400" />
              
              <div className="text-center">
                <div className="w-24 h-24 bg-blue-500 text-white rounded-lg flex items-center justify-center mb-2">
                  <BarChart3 className="w-12 h-12" />
                </div>
                <p className="font-bold text-sm">Metrics</p>
                <p className="text-xs text-gray-600">What's wrong?</p>
              </div>
              
              <ArrowRight className="w-8 h-8 text-gray-400" />
              
              <div className="text-center">
                <div className="w-24 h-24 bg-purple-500 text-white rounded-lg flex items-center justify-center mb-2">
                  <GitMerge className="w-12 h-12" />
                </div>
                <p className="font-bold text-sm">Traces</p>
                <p className="text-xs text-gray-600">Where is it?</p>
              </div>
              
              <ArrowRight className="w-8 h-8 text-gray-400" />
              
              <div className="text-center">
                <div className="w-24 h-24 bg-green-500 text-white rounded-lg flex items-center justify-center mb-2">
                  <FileText className="w-12 h-12" />
                </div>
                <p className="font-bold text-sm">Logs</p>
                <p className="text-xs text-gray-600">Why happened?</p>
              </div>
              
              <ArrowRight className="w-8 h-8 text-gray-400" />
              
              <div className="text-center">
                <div className="w-24 h-24 bg-yellow-500 text-white rounded-lg flex items-center justify-center mb-2">
                  <CheckCircle className="w-12 h-12" />
                </div>
                <p className="font-bold text-sm">Fix</p>
                <p className="text-xs text-gray-600">Problem solved</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-green-100 to-blue-100 p-5 rounded-lg border-2 border-green-400">
            <h4 className="font-bold text-xl text-green-900 mb-3">💡 Key Takeaways</h4>
            <ul className="space-y-2 text-sm text-gray-800">
              <li>• Tanpa Monitoring: Kita tidak tahu ada masalah sampai user komplain</li>
              <li>• Tanpa Tracing: Kita harus cek semua services satu per satu (sangat lama!)</li>
              <li>• Tanpa Logging: Kita tahu ada masalah di DB tapi tidak tahu query mana</li>
              <li>• Dengan Ketiganya: Root cause teridentifikasi dalam hitungan menit, bukan jam!</li>
            </ul>
          </div>

          <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-500">
            <p className="text-sm text-yellow-900">
              ⏱️ Time Comparison: Tanpa observability, troubleshooting bisa memakan waktu 2-4 jam. 
              Dengan observability yang baik, masalah bisa diidentifikasi dan diperbaiki dalam 15-30 menit.
            </p>
          </div>
        </div>
      )
    },
    {
      title: "Referensi",
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-gray-700 to-gray-800 text-white p-5 rounded-lg">
            <h3 className="text-2xl font-bold">Referensi & Sumber</h3>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-blue-50 p-5 rounded-lg">
              <h4 className="font-bold text-lg text-blue-900 mb-3">📚 Message Queue</h4>
              <ul className="text-xs space-y-2">
                <li>• RabbitMQ Documentation - rabbitmq.com/documentation</li>
                <li>• Apache Kafka Documentation - kafka.apache.org</li>
                <li>• "Designing Data-Intensive Applications" by Martin Kleppmann</li>
                <li>• "Enterprise Integration Patterns" by Gregor Hohpe</li>
                <li>• AWS SQS Best Practices - docs.aws.amazon.com</li>
                <li>• Confluent Kafka Tutorials - docs.confluent.io</li>
              </ul>
            </div>

            <div className="bg-green-50 p-5 rounded-lg">
              <h4 className="font-bold text-lg text-green-900 mb-3">📊 Observability</h4>
              <ul className="text-xs space-y-2">
                <li>• "Distributed Systems Observability" by Cindy Sridharan (O'Reilly)</li>
                <li>• Prometheus Documentation - prometheus.io/docs</li>
                <li>• OpenTelemetry Documentation - opentelemetry.io</li>
                <li>• Google SRE Book - sre.google/books</li>
                <li>• "The Three Pillars of Observability" (O'Reilly)</li>
                <li>• Jaeger Tracing - jaegertracing.io/docs</li>
              </ul>
            </div>

            <div className="bg-purple-50 p-5 rounded-lg">
              <h4 className="font-bold text-lg text-purple-900 mb-3">🔧 Tools & Platforms</h4>
              <ul className="text-xs space-y-2">
                <li>• Grafana Documentation - grafana.com/docs</li>
                <li>• Elasticsearch Guide - elastic.co/guide</li>
                <li>• Datadog Documentation - docs.datadoghq.com</li>
                <li>• New Relic University - learn.newrelic.com</li>
                <li>• Zipkin - zipkin.io</li>
                <li>• CNCF Projects - cncf.io</li>
              </ul>
            </div>

            <div className="bg-orange-50 p-5 rounded-lg">
              <h4 className="font-bold text-lg text-orange-900 mb-3">📖 Additional Resources</h4>
              <ul className="text-xs space-y-2">
                <li>• "Building Microservices" by Sam Newman</li>
                <li>• Martin Fowler's Blog on Event-Driven Architecture</li>
                <li>• AWS Well-Architected Framework</li>
                <li>• Microsoft Azure Architecture Center</li>
                <li>• InfoQ - Articles on Backend Architecture</li>
                <li>• High Scalability Blog</li>
              </ul>
            </div>
          </div>

          <div className="bg-gray-100 p-5 rounded-lg border-l-4 border-gray-500">
            <h4 className="font-bold text-lg mb-2">🎓 Recommended Learning Path</h4>
            <div className="grid grid-cols-3 gap-4 text-xs">
              <div className="bg-white p-3 rounded">
                <p className="font-semibold text-blue-900 mb-1">Beginner</p>
                <p>• Message Queue concepts</p>
                <p>• Basic logging practices</p>
                <p>• Simple metrics monitoring</p>
              </div>
              <div className="bg-white p-3 rounded">
                <p className="font-semibold text-green-900 mb-1">Intermediate</p>
                <p>• Implement RabbitMQ/Kafka</p>
                <p>• Setup ELK or Prometheus</p>
                <p>• Distributed tracing basics</p>
              </div>
              <div className="bg-white p-3 rounded">
                <p className="font-semibold text-purple-900 mb-1">Advanced</p>
                <p>• Event sourcing patterns</p>
                <p>• Custom metrics & dashboards</p>
                <p>• SLO/SLI implementation</p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "",
      content: (
        <div className="flex flex-col items-center justify-center h-full">
          <div className="text-center space-y-6">
            <div className="flex justify-center gap-6 mb-8">
              <Database className="w-20 h-20 text-blue-500" />
              <Activity className="w-20 h-20 text-green-500" />
            </div>
            
            <h1 className="text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 bg-clip-text text-transparent">
              Terima Kasih
            </h1>
            
            <p className="text-3xl text-gray-600 font-semibold">
              UTS Pemrograman Backend Lanjut
            </p>
            
            {/* <div className="mt-12">
              <div className="bg-blue-50 p-6 rounded-lg inline-block">
                <p className="text-xl text-blue-900 font-semibold mb-2">Questions?</p>
                <p className="text-gray-700">Silakan ajukan pertanyaan</p>
              </div>
            </div> */}
          </div>
        </div>
      )
    }
  ];

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="relative w-full h-screen bg-gray-50 flex flex-col items-center justify-center p-10">
      <div className="absolute top-5 right-10 text-gray-600 text-sm">
        Slide {currentSlide + 1} / {slides.length}
      </div>

      <h2 className="text-3xl font-bold mb-6 text-center">{slides[currentSlide].title}</h2>
      <div className="w-full max-w-6xl bg-white shadow-lg rounded-2xl p-8 overflow-y-auto h-[70vh]">
        {slides[currentSlide].content}
      </div>

      <div className="flex justify-between w-full max-w-4xl mt-6">
        <button
          onClick={prevSlide}
          className="flex items-center px-5 py-2 bg-gray-200 rounded-full hover:bg-gray-300 transition"
        >
          <ChevronLeft className="mr-2" /> Prev
        </button>
        <button
          onClick={nextSlide}
          className="flex items-center px-5 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
        >
          Next <ChevronRight className="ml-2" />
        </button>
      </div>
    </div>
  );
};

export default Presentation;

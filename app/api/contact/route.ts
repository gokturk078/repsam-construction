import { NextRequest, NextResponse } from 'next/server'

const rateLimitMap = new Map<string, { count: number; lastReset: number }>()

function getRateLimitKey(request: NextRequest): string {
    const forwarded = request.headers.get('x-forwarded-for')
    return forwarded?.split(',')[0]?.trim() || 'unknown'
}

function checkRateLimit(key: string): boolean {
    const now = Date.now()
    const entry = rateLimitMap.get(key)

    if (!entry || now - entry.lastReset > 3600000) {
        rateLimitMap.set(key, { count: 1, lastReset: now })
        return true
    }

    if (entry.count >= 5) {
        return false
    }

    entry.count++
    return true
}

export async function POST(request: NextRequest) {
    try {
        const ip = getRateLimitKey(request)

        if (!checkRateLimit(ip)) {
            return NextResponse.json(
                { success: false, message: 'Too many requests. Please try again later.' },
                { status: 429 }
            )
        }

        const body = await request.json()

        const { fullName, email, projectType, budget, message } = body

        if (!fullName || fullName.length < 2) {
            return NextResponse.json(
                { success: false, message: 'Full name is required.' },
                { status: 400 }
            )
        }

        if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            return NextResponse.json(
                { success: false, message: 'Valid email is required.' },
                { status: 400 }
            )
        }

        if (!projectType) {
            return NextResponse.json(
                { success: false, message: 'Project type is required.' },
                { status: 400 }
            )
        }

        if (!budget) {
            return NextResponse.json(
                { success: false, message: 'Budget range is required.' },
                { status: 400 }
            )
        }

        if (!message || message.length < 20) {
            return NextResponse.json(
                { success: false, message: 'Message must be at least 20 characters.' },
                { status: 400 }
            )
        }

        // Log the contact submission (placeholder for email integration)
        console.log('━━━━━━━━━ NEW CONTACT SUBMISSION ━━━━━━━━━')
        console.log(`Name: ${fullName}`)
        console.log(`Email: ${email}`)
        console.log(`Phone: ${body.phone || 'Not provided'}`)
        console.log(`Project Type: ${projectType}`)
        console.log(`Budget: ${budget}`)
        console.log(`Message: ${message}`)
        console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━')

        return NextResponse.json({
            success: true,
            message: "Thank you for your enquiry! We'll be in touch within 24 hours.",
        })
    } catch {
        return NextResponse.json(
            { success: false, message: 'An error occurred. Please try again.' },
            { status: 500 }
        )
    }
}

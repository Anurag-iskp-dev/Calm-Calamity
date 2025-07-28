import WidgetBot from '@widgetbot/react-embed'

export const Discord = () => (
    <div className='Chat'>
        <div className="discord-title">
            <h3>🌟Discord Server🌟</h3>
        </div>
        <WidgetBot
            server="716216682418274356"
            channel="716216683525570570"
            width="800"
            height="600"
        />
    </div>
)
